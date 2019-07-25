import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyQuotes = props => {
	const quoteCards = props.quotes.length > 0 ? 
	props.quotes.map( q => <Link to={`/my-quotes/${q.id}`} key={q.id}>{q.author}<br/></Link>) : "No quotes at the moment"
	return quoteCards
	}


const mapStateToProps = state => {
	return {
	quotes: state.myQuotes
}
}

export default connect(mapStateToProps)(MyQuotes)