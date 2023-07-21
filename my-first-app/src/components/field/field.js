import { Cell } from '../index';
import styles from './field.module.css';
import { store } from '../../store';

export const Field = () => {
	const { cells } = store.getState();

	return (
		<div className={styles.field}>
			{cells.map(({ label, value }) => (
				<Cell key={'cell' + label} label={label} value={value} />
			))}
		</div>
	);
};
