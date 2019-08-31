import React from 'react';
import { updateQuote } from '../../actions/quoteForm'
import { deleteQuote } from "../../actions/myQuotes"
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
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

    <Card border="success" style={{ width: '40rem', display: 'inline-block', padding: '10px'}}>
    <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(event, formData, userId, history)}}>
    <Card.Header><strong><h2> Add Quote details: </h2></strong></Card.Header> <br/>
    <Card.Body>
     <ListGroup variant="flush">
    	<input 
    	type="text"
    	name="author"
        value={formData.author}
    	onChange={handleOnChange}
    	placeholder="author"
    	/><br/>
    	<textarea
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
         </ListGroup>
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
