import styles from './continue.module.css';

export const Continue = ({ refreshButtonClick }) => {
	return (
		<button className={styles.continue} onClick={() => refreshButtonClick()}>
			Заново
		</button>
	);
};
