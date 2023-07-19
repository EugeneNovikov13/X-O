import styles from './header.module.css';
import { store } from '../../store';

export const Header = () => {
	const { sym, victory } = store.getState();

	return (
		<div className={styles.header}>{victory ? `Победил ${sym}` : `Ходит ${sym}`}</div>
	);
};
