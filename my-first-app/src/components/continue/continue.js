import styles from './continue.module.css';
import { store } from '../../store';
import { INIT_FIELD } from '../../constants/constants';

export const Continue = ({ appState, setAppState }) => {
	const onClick = () => {
		store.dispatch({ type: 'REFRESH_FIELD', payload: INIT_FIELD });
		setAppState(!appState);
	};

	return (
		<button className={styles.continue} onClick={onClick}>
			Заново
		</button>
	);
};
