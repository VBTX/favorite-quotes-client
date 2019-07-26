import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import NoteList from "./NoteList"
import Card from 'react-bootstrap/Card'



const QuoteCard = ({quote}) => {
	

	const handleSubmit = () => {
	    quote.notes.map(n => <NoteList notes={n}/>)
	}



	return (

		quote ?
		<Card border="success" style={{ width: '18rem', display: 'inline-block'}}>

		<Card.Header><b>Author: {quote.author} </b></Card.Header><br />
		<Card.Body>{quote.text}<br/><br/>
		<h6>Source: {quote.source}</h6>
		
		<Button variant="outline-secondary"><Link to={`/my-quotes/${quote.id}/edit`}>Edit Quote</Link></Button></Card.Body></Card> :
		null
		)
}

export default QuoteCard

		// <div className="quoteCard">

		// <br/>
		//  { quote.notes.length > 0 ? 
  //           <Button variant="outline-secondary" onClick={handleSubmit}>See Notes</Button> : 
  //           <Button type="submit" variant="outline-secondary">Add Note</Button> 
  //       }