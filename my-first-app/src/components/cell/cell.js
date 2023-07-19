import styles from './cell.module.css';
import { store } from '../../store';
import { VICTORY_COMBINATION } from '../../constants/constants';

export const Cell = ({ label, value, appState, setAppState }) => {
	const { victory } = store.getState();

	const handleCellClick = lab => {
		if (victory) return;
		store.dispatch({ type: 'FIELD_CLICK', payload: lab });
		store.dispatch({ type: 'CHECK_VICTORY', payload: VICTORY_COMBINATION });
		store.dispatch({ type: 'CHANGE_SYMBOL' });
		setAppState(!appState);
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
