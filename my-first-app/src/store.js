import { appReducer } from './reducer';

const createStore = reducer => {
	let state;

	return {
		dispatch: action => {
			state = reducer(state, action);
		},

		getState: () => state,
		subscribe: null,
	};
};

export const store = createStore(appReducer);

store.dispatch({});
