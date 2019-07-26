import React from 'react'
import './QuickCard.css'



const QuickQuoteCard = ({quote}) => {
	
	return (

		quote ?
		<div className="QuickCard">
		<h2>Author: {quote.author}</h2><br />
		<h3><i>{quote.text|| quote.quote}</i></h3>
		<h4>Source: {quote.source || <a href="theysaidso.com">TheySaidSo</a>}</h4></div> :
		null
		)
}

export default QuickQuoteCard
