import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
// import NoteList from "./NoteList"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Note from './Note'
import {connect} from 'react-redux'
import NoteList from './NoteList'



const QuoteCard = (props) => {
	
	return (

		props.quote ?
		<Card border="success" style={{ width: '40rem', display: 'inline-block', padding: '10px'}}>

		<Card.Header><b><h1>Author: {props.quote.author} </h1></b></Card.Header><br />
		<Card.Body>
		<ListGroup variant="flush">
		<h2>{props.quote.text}</h2><br/><br/>
		<h6>Source: {props.quote.source}</h6>
						<NoteList notes={props.quote.notes}/>
		<Note quoteId={props.quote.id} userId={props.currentUser.id} />
		<Button variant="outline-secondary"><Link to={`/my-quotes/${props.quote.id}/edit`}><h3>Edit Quote</h3></Link></Button></ListGroup></Card.Body></Card> :
		null
		)
}


	const mapStateToProps = state =>{
		return {
			currentUser: state.currentUser
		}
	}
export default connect(mapStateToProps)(QuoteCard)

		// <div className="quoteCard">

		// <br/>
		//  { quote.notes.length > 0 ? 
  //           <Button variant="outline-secondary" onClick={handleSubmit}>See Notes</Button> : 
  //           <Button type="submit" variant="outline-secondary">Add Note</Button> 
  //       }


  
	// const handleSubmit = () => {
	//     quote.notes.map(n => <NoteList notes={n}/>)
	// }