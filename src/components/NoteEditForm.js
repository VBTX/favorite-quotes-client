import React, { Component } from 'react';
import { updateNote } from "../actions/myNotes"
import { connect } from "react-redux"
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom"



class NoteEditForm extends Component {


constructor(props){
	  super(props);
		    this.state={
			note: this.props.state.n
	}
}
handleChange = (event) => {
	this.setState({...this.state, note: {[event.target.name]:event.target.value}});
}

handleSubmit = (event) =>{
	event.preventDefault()
	const updatedNote = {text: this.state.note.text, noteId: this.props.note.id, quoteId: this.props.note.quote_id}
	this.props.updateNote(updatedNote, this.props.history)
}
render() {
     return <div>
      	<form onSubmit={this.handleSubmit}>
      	<textarea type="text" name="text" value={this.state.note.text}
      	onChange={this.handleChange} /><Button type="submit" onClick={this.handleSubmit} variant="secondary">SUBMIT</Button>
      	</form>
      </div>

  }
}







export default withRouter(connect(null, { updateNote })(NoteEditForm));


     



//  componentDidMount(){
//  	this.props.quote && this.props.setFormDataForEdit(this.props.quote)
//  }

//  componentDidUpdate(prevProps){
//  	this.props.quote && !prevProps.quote && this.props.setFormDataForEdit(this.props.quote)

//  }

//  componentWillUnmount(){
//  		this.props.resetQuoteForm()
//  }
//  handleSubmit = (event, formData, userId) => {
//  		const { updateQuote, quote, history } = this.props
// 		event.preventDefault()
// 		updateQuote({
//             ...formData,
//             quoteId: quote.id,
//             userId
//         }, history)
// 	}

// 	render() {

// 	return <>
// 			<QuoteForm editMode history={this.history} handleSubmit={this.handleSubmit}/>
// 			</>
// }
// 	};
