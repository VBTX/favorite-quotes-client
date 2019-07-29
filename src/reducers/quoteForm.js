const initialState = {
	author: "",
	text: "",
	source: "", 
	notes: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_QUOTE_FORM":
		return action.formData

		case "RESET_QUOTE_FORM":
		return initialState

		case "SET_FORM_DATA_FOR_EDIT":
		return action.quote

		case "ADD_NOTE":
		return console.log(action)
		
		default:
		  return state
	}
}