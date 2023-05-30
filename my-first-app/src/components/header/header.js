import styles from './header.module.css';
import PropTypes from 'prop-types';

export const Header = ({ sym, victory }) => {
	return (
		<div className={styles.header}>{victory ? `Победил ${sym}` : `Ходит ${sym}`}</div>
	);
};

Header.propTypes = {
	sym: PropTypes.string,
};
