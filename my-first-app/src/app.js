import PropTypes from 'prop-types';
import { Header, Field, Continue } from './components';
import styles from './app.module.css';
import { useState } from 'react';

const initField = [
	{ label: '1', value: '' },
	{ label: '2', value: '' },
	{ label: '3', value: '' },
	{ label: '4', value: '' },
	{ label: '5', value: '' },
	{ label: '6', value: '' },
	{ label: '7', value: '' },
	{ label: '8', value: '' },
	{ label: '9', value: '' },
];

const victoryCombination = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const App = () => {
	const [sym, setSym] = useState('X');
	const [next, setNext] = useState(false);
	const [victory, setVictory] = useState(false);
	const [cells, setCells] = useState(initField);

	const checkVictory = () => {
		const values = cells.map(obj => obj.value);
		victoryCombination.forEach(([a, b, c]) => {
			if (values[a] + values[b] + values[c] === 'XXX') {
				setVictory(true);
				setSym('X');
			} else if (values[a] + values[b] + values[c] === '○○○') {
				setVictory(true);
				setSym('○');
			}
		});
	};

	if (next) {
		checkVictory();
		setNext(false);
	}

	const handleCellClick = (lab, val) => {
		if (victory) return;
		if (val === '') {
			setCells(cells.map(el => (el.label === lab ? { ...el, value: sym } : el)));
			sym === 'X' ? setSym('○') : setSym('X');
			setNext(true);
		}
	};

	const refreshButtonClick = () => {
		setCells(initField);
		setNext(false);
		setVictory(false);
	};

	return (
		<AppLayout
			sym={sym}
			victory={victory}
			cells={cells}
			handleCellClick={handleCellClick}
			refreshButtonClick={refreshButtonClick}
		/>
	);
};

const AppLayout = ({ sym, victory, cells, handleCellClick, refreshButtonClick }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.game}>
				<Header sym={sym} victory={victory} />
				<Field cells={cells} handleCellClick={handleCellClick} />
				<Continue refreshButtonClick={refreshButtonClick} />
			</div>
		</div>
	);
};

AppLayout.propTypes = {
	sym: PropTypes.string,
	victory: PropTypes.bool,
	cells: PropTypes.array,
	handleCellClick: PropTypes.func,
	refreshButtonClick: PropTypes.func,
};
