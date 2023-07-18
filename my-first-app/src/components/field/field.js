import { Cell } from '../index';
import styles from './field.module.css';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const Field = () => {
	const { cells } = store.getState();
	console.log('Field', cells);

	return (
		<div className={styles.field}>
			{cells.map(({ label, value }) => (
				<Cell
					key={'cell' + label}
					label={label}
					value={value}
					// handleCellClick={handleCellClick}
				/>
			))}
		</div>
	);
};

Field.propTypes = {
	cells: PropTypes.array,
	handleCellClick: PropTypes.func,
};
