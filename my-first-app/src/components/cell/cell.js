import styles from './cell.module.css';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const Cell = ({ label, value }) => {
	const { victory, sym } = store.getState();

	const onClick = () => {
		if (victory) return;
		if (value === '')
			store.dispatch({ type: 'FIELD_CLICK', payload: { label: label, sym: sym } });
	};

	return (
		<div className={styles.cell} onClick={onClick}>
			{value}
		</div>
	);
};

Cell.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	handleCellClick: PropTypes.func,
};
