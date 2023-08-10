import styles from './header.module.css';
import { useSelector } from 'react-redux';
import { selectSym, selectVictory } from '../../selectors';

export const Header = () => {
	const sym = useSelector(selectSym);
	const victory = useSelector(selectVictory);

	return (
		<div className={styles.header}>{victory ? `Победил ${sym}` : `Ходит ${sym}`}</div>
	);
};
