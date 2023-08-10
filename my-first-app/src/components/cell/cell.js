import styles from './cell.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVictory } from '../../selectors';
import { CHANGE_SYMBOL, CHECK_VICTORY, fieldClick } from '../../actions';

export const Cell = ({ label, value }) => {
	const dispatch = useDispatch();

	const victory = useSelector(selectVictory);

	const handleCellClick = lab => {
		if (victory) return;
		dispatch(fieldClick(lab));
		dispatch(CHECK_VICTORY);
		dispatch(CHANGE_SYMBOL);
	};

	return (
		<div
			className={styles.cell}
			onClick={() => (value === '' ? handleCellClick(label) : null)}
		>
			{value}
		</div>
	);
};
