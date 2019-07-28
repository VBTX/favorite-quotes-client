import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import QuickQuoteCard from './QuickQuoteCard'


const MyQuotes = props => {
	const quoteCards = props.quotes.length > 0 ? 
	props.quotes.map( q => <Link to={`/my-quotes/${q.id}`} className="link" key={q.id}>{<QuickQuoteCard quote={q}/>}<br/></Link>) : "No quotes at the moment"
	return quoteCards
	}


const mapStateToProps = state => {
	return {
	quotes: state.myQuotes
}
}

export default connect(mapStateToProps)(MyQuotes)