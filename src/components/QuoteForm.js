import React from 'react';
import { updateQuote } from '../actions/quoteForm'
import { connect } from 'react-redux'

const QuoteForm = ({ formData, updateQuote, history, userId, quote, handleSubmit, editMode }) => {

	const handleOnChange = event => {
		const { name, value } = event.target
		const enteredNewQuote = {
			...formData,
			[name]:value

		}
		updateQuote(enteredNewQuote)
		//passing the object into a function that came from imported action
	}
  return (


    <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(event, formData, userId, history)}}>
    <h3> Add Quote details: </h3>
    	<input 
    	type="text"
    	name="author"
        value={formData.author}
    	onChange={handleOnChange}
    	placeholder="author"
    	/><br/>
    	<input 
    	type="text"
    	name="text"
    	onChange={handleOnChange}
    	value={formData.text}
    	placeholder="quote"
    	/><br/>
    	<input 
    	type="text"
    	name="source"
    	onChange={handleOnChange}
    	value={formData.source}
    	placeholder="source"
    	/><br/>
    	<input type="submit" value={ editMode ? "Update" : "Add"}/>

    </form>
  );
};

const mapStateToProps = state => {
    const userId =  state.currentUser ? state.currentUser.id : ""
	return {
		formData: state.quoteForm,
        userId
	}
}

export default connect(mapStateToProps, { updateQuote})(QuoteForm);