import { useState } from 'react';
import { AppLayout } from './app-layout';

export const App = () => {
	const [appState, setAppState] = useState(false);

	return <AppLayout appState={appState} setAppState={setAppState} />;
};
