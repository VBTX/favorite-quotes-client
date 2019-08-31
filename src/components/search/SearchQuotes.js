import React, { Component } from 'react';
import { setSearch, resetSearchForm } from '../../actions/search';
import { connect } from 'react-redux';
import QuoteCard from '../quotes/QuoteCard'
import Button from 'react-bootstrap/Button';
// import NavBar from 'react-bootstrap/NavBar';
import { withRouter } from "react-router-dom"
import Form from 'react-bootstrap/Form';



class SearchQuotes extends Component {

	state = {
		quote: {},
		searched: false
	}


		handleInputChange = event =>  {
			const { name, value } = event.target
			const input = {
				[name]:value

			}
			this.props.setSearch(input)
	
		}

		handleSubmit = (event) => {
		event.preventDefault()	
		const { quotes, search } = this.props	
 		const quote = quotes.filter(q => q.text.includes(search.search))
 		if (quote.length>0){
 			this.setState({quote:quote, searched: true})
 		} else {
 			this.setState({quote:quote, searched: true})
 		}
 		resetSearchForm()	
}


		



 render () {
 				return (<><Form className="mr-sm-2" onSubmit={this.handleSubmit}>
					<h2><input
			        name="search"
			        placeholder="Search Your Quotes"
			        type="text"
			        onChange={this.handleInputChange}
			      /></h2><Button variant="success" type="submit">SEARCH</Button>
			   </Form><br/>
			        {(this.state.quote.length === 0) ? 
			      	<h2>No quote matched your search</h2> :  <QuoteCard quote={this.state.quote[0]}/>
			      }</>
 			   )
 			}
}



const mapStateToProps = state => {
			return ({
			search: state.search,
		    quotes: state.myQuotes
			})
		}


		const mapDispatchToProps = {
			setSearch
		}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchQuotes));




