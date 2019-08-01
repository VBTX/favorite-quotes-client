import React, { Component } from 'react';
import { updateNote } from "../actions/myNotes"
import { connect } from "react-redux"
import Button from 'react-bootstrap/Button';




class NoteEditForm extends Component {

handleChange = () => {
	
}
render() {
     return <div>
      	<form onSubmit={this.handleSubmit}>
      	<textarea type="text" name="text" value={this.props.note.text}
      	onChange={this.handleChange} /><Button type="submit" variant="secondary">SUBMIT</Button>
      	</form>
      </div>

  }
}






export default connect(null, { updateNote })(NoteEditForm);


     



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
