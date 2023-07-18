import { initField } from './constants/constants';

const initialState = {
	sym: 'X',
	cells: initField,
	victory: false,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'REFRESH_FIELD': {
			return {
				...state,
				cells: initField,
				victory: false,
			};
		}

		case 'FIELD_CLICK': {
			return {
				...state,
				cells: state.cells.map(el =>
					el.label === payload ? { ...el, value: state.sym } : el,
				),
			};
		}

		case 'SET_VICTORY_TRUE': {
			return {
				...state,
				victory: true,
			};
		}

		case 'CHANGE_SYMBOL': {
			return {
				...state,
				sym: payload,
			};
		}

		default:
			return state;
	}
};
