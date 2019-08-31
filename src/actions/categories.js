
//SYNC
export const setMyCategories = categories => {
	return {
		type: "SET_MY_CATEGORIES",
		categories
	}
}

// export const clearQuotes = () => {
//   return {
//     type: "CLEAR_QUOTES"
//   }
//  }

// export const addQuote = quote => {
//  	return {
//  		type: "ADD_QUOTE",
//  		quote
//  	}
//  }

// export const deleteQuoteSuccess = quoteId => {
//  	return {
//  		type: "DELETE_QUOTE_SUCCESS",
//  		quoteId
//  	}
//  }

//  export const updateQuoteSuccess = quote => {
//  	return {
//  		type: "UPDATE_QUOTE",
//  		quote
//  	}
//  }



export const getMyCategories = () => {
	return dispatch => {
		return fetch("http://localhost:3001/api/v1/categories", {
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
				dispatch(setMyCategories(response))
			}
		})
		.catch(console.log)
	}
}

// export const createCategory = (categoryData, history) => {
// 	return dispatch => {
// 		const sendableQuoteData = {
// 			quote: {
// 				author: quoteData.author || quoteData.quote.author,
// 				text: quoteData.text || quoteData.quote.quote,
// 				source: quoteData.source || quoteData.quote.permalink,
// 				user_id: quoteData.userId
// 			}
// 		}
// 		return fetch("http://localhost:3001/api/v1/quotes", {
// 			credentials: "include",
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify(sendableQuoteData)
// 		})
// 		.then(r=> r.json())
// 		.then(quote => {
// 			if (quote.error) {
// 				alert(quote.error)
// 			} else{
// 			dispatch(addQuote(quote))
// 			dispatch(resetQuoteForm())
// 			history.push(`/my-quotes/${quote.id}`)
// 		}
// 		})
// 		.catch(console.log)
// 	}
// }