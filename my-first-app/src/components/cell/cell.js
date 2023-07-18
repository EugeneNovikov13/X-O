import styles from './cell.module.css';
import PropTypes from 'prop-types';

export const Cell = ({ label, value, handleCellClick }) => {
	return (
		<div
			className={styles.cell}
			onClick={() => (value === '' ? handleCellClick(label) : null)}
		>
			{value}
		</div>
	);
};

Cell.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	handleCellClick: PropTypes.func,
};
