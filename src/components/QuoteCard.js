import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const QuoteCard = ({quote}) => {
	
	return (

		quote ?

		<div className="quoteCard">
		<h2>{quote.author}</h2><br />
		<h3>{quote.text}</h3> <br/>
		<h4>{quote.source}</h4><br/>
		 { quote.notes.length > 0 ? 
            <Button variant="outline-secondary" onClick={()=> quote.notes.map(n => console.log(n.text))}>See Notes</Button> : 
            <Button type="submit" variant="outline-secondary">Add Note</Button> 
        }
		<Button variant="outline-secondary"><Link to={`/my-quotes/${quote.id}/edit`}>Edit Quote</Link></Button></div> :
		null
		)
}

export default QuoteCard