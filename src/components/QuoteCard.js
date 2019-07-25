import React from 'react'
import { Link } from 'react-router-dom'


const QuoteCard = ({quote}) => {
	
	return (

		quote ?

		<div className="quoteCard">
		<h2>{quote.author}</h2><br />
		<h3>{quote.text}</h3> <br/>
		<h4>{quote.source}</h4><br/>
		<Link to={`/quotes/${quote.id}/edit`}>Edit Trip Info</Link></div> :
		null
		)
}

export default QuoteCard