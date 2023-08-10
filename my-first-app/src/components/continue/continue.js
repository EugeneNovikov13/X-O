import styles from './continue.module.css';
import { useDispatch } from 'react-redux';
import { REFRESH_FIELD } from '../../actions';

export const Continue = () => {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(REFRESH_FIELD);
	};

	return (
		<button className={styles.continue} onClick={onClick}>
			Заново
		</button>
	);
};
