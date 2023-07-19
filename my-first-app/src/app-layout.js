import styles from './app.module.css';
import { Continue, Field, Header } from './components';

export const AppLayout = ({ appState, setAppState }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.game}>
				<Header />
				<Field appState={appState} setAppState={setAppState} />
				<Continue appState={appState} setAppState={setAppState} />
			</div>
		</div>
	);
};
