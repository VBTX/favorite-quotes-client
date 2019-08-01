import React from 'react'
import './QuickCard.css'
import { Link } from 'react-router-dom'
import Vote from './Vote'
import { createQuote } from "../actions/myQuotes"
import { connect } from "react-redux"
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom"
// import ListGroup from 'react-bootstrap/ListGroup'




const QuickQuoteCard = ({quote, createQuote, userId, history}) => {

const handleSubmit = (event) => {

		event.preventDefault()
		createQuote({
            quote,
            userId
        }, history)
}

	
	return (

		quote ?
		<div className="QuickCard">
		<h3><i><strong><Link to={`/my-quotes/${quote.id}`} className="link" key={quote.id}>{quote.text|| quote.quote}</Link></strong></i></h3><br/>
		<h5>Author: <a href={`https://www.google.com/search?q=${quote.author}`} target="_blank" rel="noopener noreferrer">{quote.author}</a>; Source: {quote.source || <a href="theysaidso.com">TheySaidSo</a>}</h5>
		{ quote.quote ? <Button type="submit" variant="success" onClick={(quote, history)=>{handleSubmit(quote, history)}}>Add to Favorites</Button> : null  }		

		<Vote /></div>:
		null
		)
}

 const mapStateToProps = state => {
 		return {
 			userId: state.currentUser.id
 		}

 }

export default withRouter(connect(mapStateToProps, { createQuote })(QuickQuoteCard))






	