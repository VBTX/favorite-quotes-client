import React from 'react';
import { updateQuote } from '../actions/quoteForm'
import { deleteQuote } from "../actions/myQuotes"
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { withRouter } from "react-router-dom"

const QuoteForm = ({ formData, updateQuote, history, userId, quoteId, handleSubmit, editMode, deleteQuote }) => {

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

    <Card border="success" style={{ width: '20rem', display: 'inline-block', padding: '10px'}}>
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
            <>
            <Button type="submit" variant="outline-success">Update</Button>
            <Button variant="outline-danger" onClick={()=>deleteQuote(quoteId, history)}> Delete </Button>
            </>
             : 
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
        userId,
        quoteId: state.quoteForm.id
	}
}

export default withRouter(connect(mapStateToProps, { updateQuote, deleteQuote })(QuoteForm));

 // value={ editMode ? "Update" : "Add"}