import React from 'react'
import './QuickCard.css'



const QuickQuoteCard = ({quote}) => {
	
	return (

		quote ?
		<div className="QuickCard">
		<h3><i><strong>{quote.text|| quote.quote}</strong></i></h3><br/>
		<h5>Author: {quote.author}; Source: {quote.source || <a href="theysaidso.com">TheySaidSo</a>}</h5></div> :
		null
		)
}

export default QuickQuoteCard
