import quotesActionTypes from './quotesTypes';

const INITIAL_STATE = {
	quotes: [],
	isFetching: false,
	errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case quotesActionTypes.FETCH_QUOTES_START:
			return {
				...state,
				isFetching: true
			};
		case quotesActionTypes.FETCH_QUOTES_SUCCESS:
			return {
				...state,
				isFetching: false,
				quotes: action.quotes
			};
		case quotesActionTypes.FETCH_QUOTES_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		case quotesActionTypes.SET_MY_QUOTES:
			return {
				...state,
				quotes: action.quotes
			};
		case quotesActionTypes.ADD_QUOTE:
			return {
				...state,
				quotes: state.quotes.concat(action.quote)
			};
		case quotesActionTypes.UPDATE_QUOTE:
			return {
				...state,
				quotes: state.map(quote =>
					quote.id === action.quote.id ? action.quote : quote
				)
			};
		case quotesActionTypes.DELETE_QUOTE_SUCCESS:
			return {
				...state,
				quotes: state.quotes.filter(quote =>
					quote.id === action.quoteId ? false : true
				)
			};
		case quotesActionTypes.CLEAR_QUOTES:
			return {
				...state,
				quotes: []
			};
		case quotesActionTypes.FIND_IT:
			return state.filter(quote => quote.text.includes(action.search));

		default:
			return state;
	}
};
