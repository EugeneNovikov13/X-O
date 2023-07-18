import { useEffect, useState } from 'react';
import { checkVictory } from './utils/utils';
import { initField } from './constants/constants';
import { AppLayout } from './app-layout';
import { store } from './store';

export const App = () => {
	const { sym, victory, cells } = store.getState();
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		checkVictory(cells, sym)
			? store.dispatch({ type: 'SET_VICTORY_TRUE' })
			: sym === 'X'
			? store.dispatch({ type: 'CHANGE_SYMBOL', payload: '○' })
			: store.dispatch({ type: 'CHANGE_SYMBOL', payload: 'X' });
		setRefresh(!refresh);
	}, [cells]);

	const handleCellClick = lab => {
		if (victory) return;
		store.dispatch({ type: 'FIELD_CLICK', payload: lab });
	};

	const refreshButtonClick = () => {
		store.dispatch({ type: 'REFRESH_FIELD' });
	};

	return (
		<AppLayout
			sym={sym}
			victory={victory}
			cells={cells}
			handleCellClick={handleCellClick}
			refreshButtonClick={refreshButtonClick}
		/>
	);
};
