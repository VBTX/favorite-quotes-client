export default (state = [], action) => {
	switch (action.type) {

		case "SET_MY_QUOTES":
		  return action.quotes
		// case "ADD_QUOTE":
		// return state.concat(action.quote)
		case "UPDATE_QUOTE":
		return state.map(quote => quote.id===action.quote.id ? action.quote : quote)
		// case "DELETE_QUOTE_SUCCESS":
		// // console.log(state.quotes, action.quoteId)
		// return state.filter(quote => quote.id === action.quoteId ? false:true)
		case "CLEAR_QUOTES":
		  return []
		default:
		  return state
	}
}
