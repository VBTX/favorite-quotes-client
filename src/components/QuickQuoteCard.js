import React from 'react'
import './QuickCard.css'
import { Link } from 'react-router-dom'



const QuickQuoteCard = ({quote}) => {
	
	return (

		quote ?
		<div className="QuickCard">
		<h3><i><strong><Link to={`/my-quotes/${quote.id}`} className="link" key={quote.id}>{quote.text|| quote.quote}</Link></strong></i></h3><br/>
		<h5>Author: <a href={`https://www.google.com/search?q=${quote.author}`} target="_blank">{quote.author}</a>; Source: {quote.source || <a href="theysaidso.com">TheySaidSo</a>}</h5></div> :
		null
		)
}

export default QuickQuoteCard
