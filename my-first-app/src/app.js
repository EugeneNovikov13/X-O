import { useEffect, useState } from 'react';
import { AppLayout } from './app-layout';
import { store } from './store';

export const App = () => {
	const [appState, setAppState] = useState(false);

	useEffect(() => {
		store.subscribe = () => setAppState(!appState);
	}, [appState]);

	return <AppLayout />;
};
