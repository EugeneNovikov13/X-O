import { Cell } from '../index';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export const Field = ({ cells, handleCellClick }) => {
	return (
		<div className={styles.field}>
			{cells.map(({ label, value }) => (
				<Cell
					key={'cell' + label}
					label={label}
					value={value}
					handleCellClick={handleCellClick}
				/>
			))}
		</div>
	);
};

Field.propTypes = {
	cells: PropTypes.array,
	handleCellClick: PropTypes.func,
};
