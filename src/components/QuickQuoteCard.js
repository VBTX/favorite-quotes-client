import React from 'react'
import './QuickCard.css'


const QuickQuoteCard = ({quote}) => {
	
	return (

		quote ?

		<div className="QuickCard">
		<h2>{quote.author}</h2><br />
		<h3><i>{quote.text|| quote.quote}</i></h3>
		<h4>{quote.source}</h4></div> :
		null
		)
}

export default QuickQuoteCard