import React from 'react'
import QuickQuoteCard from '../quotes/QuickQuoteCard'


const QuotesByCategory = props => {


	if (props.quotes.length > 0) {
		const quoteCards = props.quotes.map( q => <QuickQuoteCard key={q.id} quote={q}/>)
		return quoteCards
	} else if (props.clicked){
		console.log("im clicked")
			return "No categories matched your search"
    } else {

    	console.log("im in null")
			return null
		}
}



export default QuotesByCategory;



// const quoteCards = props.quotes.length > 0 ? 
// 	<div className="myQuotes"><br />

// 	 : {props.clicked} ? <div>{"No categories matched your search"}</div> : null 
// 	return quoteCards
// 	}

// const MyQuotes = props => {
// 	const quoteCards = props.quotes.length > 0 ? 
// 	<div className="myQuotes"><SearchCategory /><br />{props.quotes.map( q => <QuickQuoteCard key={q.id} quote={q}/>)}</div> : "No quotes at the moment"
// 	return quoteCards
// 	}
