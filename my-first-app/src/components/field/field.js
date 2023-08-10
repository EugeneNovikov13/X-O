import { useSelector } from 'react-redux';
import { selectCells } from '../../selectors';
import { Cell } from '../index';
import styles from './field.module.css';

export const Field = () => {
	const cells = useSelector(selectCells);

	return (
		<div className={styles.field}>
			{cells.map(({ label, value }) => (
				<Cell key={'cell' + label} label={label} value={value} />
			))}
		</div>
	);
};
