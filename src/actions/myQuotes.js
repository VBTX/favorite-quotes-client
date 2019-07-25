//SYNC
export const setMyQuotes = quotes => {
	return {
		type: "SET_MY_QUOTES",
		quotes
	}
}








//ASYNC


export const getMyQuotes = () => {
	return dispatch => {
		return fetch("http://localhost:3001/api/v1/quotes", {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(r => r.json())
		.then(response => {
			if (response.error){
				alert(response.error)
			} else {
				dispatch(setMyQuotes(response))
			}
		})
		.catch(console.log)
	}
}