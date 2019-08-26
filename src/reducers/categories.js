export default (state = [], action) => {
	switch (action.type) {

		case "SET_MY_CATEGORIES":
		return action.categories
		case "ADD_CATEGORY":
		return state.concat(action.category)
		case "UPDATE_CATEGORY":
		return state.map(category => category.id===action.category.id ? action.category : category)
		case "DELETE_CATEGORY_SUCCESS":
		// console.log(state.quotes, action.quoteId)
		return state.filter(category => category.id === action.categoryId ? false:true)
		case "CLEAR_CATEGORIES":
		  return []
		case "FIND_IT":
		return state.filter(quote => quote.text.includes(action.search))
		// case "ADD_NOTE":
		// return state.find(q => q.id===action.note.quote_id ? q.notes.push(action.note) :false)
		default:
		  return state
	}
}
