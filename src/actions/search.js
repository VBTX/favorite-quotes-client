export const setSearch = search => {
	return {
		type: "SET_SEARCH",
		search
	}
}


export const findIt = (search) => {
	return {
		type: "FIND_IT",
		search
	}
}

export const resetSearchForm = () => {
	return {
		type: "RESET_Search_FORM"
	}
}
//we will dispatch this object

