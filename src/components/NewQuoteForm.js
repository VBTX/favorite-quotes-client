import React from 'react';
import { createQuote } from "../actions/myQuotes"
import { connect } from "react-redux"
import QuoteForm from "./QuoteForm"



const NewQuoteForm = ({ history, createQuote }) => {

	const handleSubmit = (event, formData, userId, history) => {

		event.preventDefault()
		createQuote({
            ...formData,
            userId
        }, history)
	}
	return <QuoteForm history={history} handleSubmit={handleSubmit}/>
	};


export default connect(null, { createQuote })(NewQuoteForm);