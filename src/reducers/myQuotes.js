const INITIAL_STATE = {
	quotes: [],
	isFetching: false,
	errorMessage: undefined
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'FETCH_QUOTES_START':
			return {
				...state,
				isFetching: true
			};
		case 'FETCH_QUOTES_SUCCESS':
			return {
				...state,
				isFetching: false,
				quotes: action.quotes
			};
		case 'FETCH_QUOTES_FAILURE':
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		case 'SET_MY_QUOTES':
			return {
				...state,
				quotes: action.quotes
			};
		case 'ADD_QUOTE':
			return {
				...state,
				quotes: state.quotes.concat(action.quote)
			};
		case 'UPDATE_QUOTE':
			return state.map(quote =>
				quote.id === action.quote.id ? action.quote : quote
			);
		case 'DELETE_QUOTE_SUCCESS':
			return state.filter(quote =>
				quote.id === action.quoteId ? false : true
			);
		case 'CLEAR_QUOTES':
			return [];
		case 'FIND_IT':
			return state.filter(quote => quote.text.includes(action.search));

		default:
			return state;
	}
};

// case "ADD_NOTE":
// return state.find(q => q.id===action.note.quote_id ? q.notes.push(action.note) :false)
