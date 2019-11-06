import { resetQuoteForm } from './quoteForm';

//SYNC
export const setMyQuotes = quotes => {
	return {
		type: 'SET_MY_QUOTES',
		quotes
	};
};

export const clearQuotes = () => {
	return {
		type: 'CLEAR_QUOTES'
	};
};

export const addQuote = quote => {
	return {
		type: 'ADD_QUOTE',
		quote
	};
};

export const deleteQuoteSuccess = quoteId => {
	return {
		type: 'DELETE_QUOTE_SUCCESS',
		quoteId
	};
};

export const updateQuoteSuccess = quote => {
	return {
		type: 'UPDATE_QUOTE',
		quote
	};
};

//ASYNC

export const getMyQuotes = () => {
	return dispatch => {
		return fetch('https://favorite-quotes-api.herokuapp.com/api/v1/quotes', {
			credentials: 'include',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(r => r.json())
			.then(response => {
				if (response.error) {
					alert(response.error);
				} else {
					dispatch(setMyQuotes(response));
				}
			})
			.catch(console.log);
	};
};

export const createQuote = (quoteData, history) => {
	return dispatch => {
		const sendableQuoteData = {
			quote: {
				author: quoteData.author || quoteData.quote.author,
				text: quoteData.text || quoteData.quote.quote,
				source: quoteData.source || quoteData.quote.permalink,
				user_id: quoteData.userId
			}
		};
		return fetch('https://favorite-quotes-api.herokuapp.com/api/v1/quotes', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sendableQuoteData)
		})
			.then(r => r.json())
			.then(quote => {
				if (quote.error) {
					alert(quote.error);
				} else {
					dispatch(addQuote(quote));
					dispatch(resetQuoteForm());
					history.push(`/my-quotes/${quote.id}`);
				}
			})
			.catch(console.log);
	};
};

export const updateQuote = (quoteData, history) => {
	return dispatch => {
		const sendableQuoteData = {
			quote: {
				author: quoteData.author,
				text: quoteData.text,
				source: quoteData.source,
				user_id: quoteData.userId
			}
		};
		return fetch(
			`https://favorite-quotes-api.herokuapp.com/api/v1/quotes/${quoteData.quoteId}`,
			{
				credentials: 'include',
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(sendableQuoteData)
			}
		)
			.then(r => r.json())
			.then(quote => {
				if (quote.error) {
					alert(quote.error);
				} else {
					dispatch(updateQuoteSuccess(quote));
					//this update will update the store
					// dispatch(resetQuoteForm()) --> included componentWillUnmount in edit Quote Form which resets the form.
					history.push(`/my-quotes/${quote.id}`);
				}
			})
			.catch(console.log);
	};
};

export const deleteQuote = (quoteId, history) => {
	return dispatch => {
		return fetch(
			`https://favorite-quotes-api.herokuapp.com/api/v1/quotes/${quoteId}`,
			{
				credentials: 'include',
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
			.then(r => r.json())
			.then(quote => {
				if (quote.error) {
					alert(quote.error);
				} else {
					dispatch(deleteQuoteSuccess(quoteId));
					dispatch(resetQuoteForm());
					//this update will update the store
					history.push('/my-quotes');
				}
			})
			.catch(console.log);
	};
};
