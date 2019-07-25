

export const updateQuote = (formData) => {
	return {
		type: "UPDATE_QUOTE_FORM",
		formData
	}
}

export const resetQuoteForm = () => {
	return {
		type: "RESET_QUOTE_FORM"
	}
}

export const setFormDataForEdit = quote => {
	return {
	type: "SET_FORM_DATA_FOR_EDIT",
	quote
}
}