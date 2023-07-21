import styles from './app.module.css';
import { Continue, Field, Header } from './components';

export const AppLayout = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.game}>
				<Header />
				<Field />
				<Continue />
			</div>
		</div>
	);
};
