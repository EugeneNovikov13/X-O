import { INIT_FIELD } from './constants/constants';

const initialState = {
	sym: 'X',
	cells: INIT_FIELD,
	victory: false,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'REFRESH_FIELD': {
			return {
				...state,
				cells: payload,
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

		case 'CHECK_VICTORY': {
			return payload.some(comb =>
				comb.every(el => state.cells[el].value === state.sym),
			)
				? {
						...state,
						victory: true,
				  }
				: state;
		}

		case 'CHANGE_SYMBOL': {
			if (state.victory) return state;
			return state.sym === 'X'
				? {
						...state,
						sym: '○',
				  }
				: {
						...state,
						sym: 'X',
				  };
		}

		default:
			return state;
	}
};
