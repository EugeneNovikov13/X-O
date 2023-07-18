import styles from './continue.module.css';
import { store } from '../../store';

export const Continue = () => {
	const onClick = () => {
		store.dispatch({ type: 'REFRESH_FIELD' });
	};

	return (
		<button className={styles.continue} onClick={onClick}>
			Заново
		</button>
	);
};
