import { useEffect, useState } from 'react';
import { checkVictory } from './utils/utils';
import { initField } from './constants/constants';
import { AppLayout } from './app-layout';
import { store } from './store';

export const App = () => {
	const appStore = store.getState();
	const [appState, setAppState] = useState(store.getState());
	// const [sym, setSym] = useState('X');
	// const [victory, setVictory] = useState(false);
	// const [cells, setCells] = useState(initField);
	const { sym, cells, victory } = store.getState();

	useEffect(() => {
		setAppState(appStore);
		console.log('useEffect');
		checkVictory(cells, sym)
			? store.dispatch({ type: 'SET_VICTORY_TRUE' })
			: sym === 'X'
			? store.dispatch({ type: 'CHANGE_SYMBOL', payload: '○' })
			: store.dispatch({ type: 'CHANGE_SYMBOL', payload: 'X' });
	}, [appStore]);

	// const handleCellClick = lab => {
	// 	if (victory) return;
	// 	const newCells = cells.map(el => (el.label === lab ? { ...el, value: sym } : el));
	// 	setCells(newCells);
	// };

	// const refreshButtonClick = () => {
	// 	setCells(initField);
	// 	setVictory(false);
	// };

	return (
		<AppLayout
			sym={sym}
			victory={victory}
			// cells={cells}
			// handleCellClick={handleCellClick}
			// refreshButtonClick={refreshButtonClick}
		/>
	);
};
