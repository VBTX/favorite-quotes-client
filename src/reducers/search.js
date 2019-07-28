const initialState = {
	search: ""
}



export default (state="", action) => {
	switch (action.type){
		case "SET_SEARCH":
		return action.search
		case "RESET_SEARCH_FORM":
		return initialState
	default:
		  return state
	}
}