import styles from './continue.module.css';
import { store } from '../../store';
import { INIT_FIELD } from '../../constants/constants';

export const Continue = () => {
	const onClick = () => {
		store.dispatch({ type: 'REFRESH_FIELD', payload: INIT_FIELD });
		store.subscribe();
	};

	return (
		<button className={styles.continue} onClick={onClick}>
			Заново
		</button>
	);
};
