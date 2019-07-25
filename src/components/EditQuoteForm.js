import React, { Component } from 'react';
import { setFormDataForEdit } from "../actions/quoteForm"
import { updateQuote, deleteQuote } from "../actions/myQuotes"
import { connect } from "react-redux"
import QuoteForm from "./QuoteForm"
import { resetQuoteForm } from "../actions/quoteForm"



class EditQuoteForm extends Component {
 

 componentDidMount(){
 	this.props.quote && this.props.setFormDataForEdit(this.props.quote)
 }

 componentDidUpdate(prevProps){
 	this.props.quote && !prevProps.quote && this.props.setFormDataForEdit(this.props.quote)

 }

 componentWillUnmount(){
 		this.props.resetQuoteForm()
 }
 handleSubmit = (event, formData, userId) => {
 		const { updateQuote, quote, history } = this.props
		event.preventDefault()
		updateQuote({
            ...formData,
            quoteId: quote.id,
            userId
        }, history)
	}

	render() {
		const { history, deleteQuote, quote } = this.props
		const quoteId = quote ? quote.id : null 
	return <>
			<QuoteForm editMode history={this.history} handleSubmit={this.handleSubmit}/>
			<button style={{color:"red"}} onClick={()=>deleteQuote(quoteId, history)}> Delete </button>
			</>
}
	};


export default connect(null, { updateQuote, setFormDataForEdit, resetQuoteForm, deleteQuote })(EditQuoteForm);