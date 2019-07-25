import React from 'react';
import { updateQuote } from '../actions/quoteForm'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

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

    <Card border="success" style={{ width: '18rem', display: 'inline-block'}}>
    <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(event, formData, userId, history)}}>
    <Card.Header> Add Quote details: </Card.Header> <br/>
    <Card.Body>
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
    	/>
        </Card.Body>
        { editMode ? 
            <Button type="submit" variant="outline-success">Update</Button> : 
            <Button type="submit" variant="outline-success">Add</Button> 
        }
    	

    </form>
    </Card>
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

 // value={ editMode ? "Update" : "Add"}