import styles from './app.module.css';
import { Continue, Field, Header } from './components';
import PropTypes from 'prop-types';

export const AppLayout = ({
	sym,
	victory,
	// cells,
	// handleCellClick,
	// refreshButtonClick,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.game}>
				<Header sym={sym} victory={victory} />
				<Field />
				<Continue />
			</div>
		</div>
	);
};

AppLayout.propTypes = {
	sym: PropTypes.string,
	victory: PropTypes.bool,
	cells: PropTypes.array,
	handleCellClick: PropTypes.func,
	refreshButtonClick: PropTypes.func,
};
