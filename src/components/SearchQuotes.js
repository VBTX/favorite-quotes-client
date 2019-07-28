import React, { Component } from 'react';
import { setSearch} from '../actions/search';
import { connect } from 'react-redux';
import QuoteCard from './QuoteCard'



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
 		if (quote){
 			this.setState({quote:quote, searched: true})
 		} else {
 			return this.state
 			// this.setState({quote:"No quotes match search criteria"})
 		}	
}


		



 render () {
 				return (<><form onSubmit={this.handleSubmit}>
					<input
			        name="search"
			        placeholder="Search Your Quotes"
			        type="text"
			        onChange={this.handleInputChange}
			      /><button type="submit"> SEARCH </button>
			      </form><br/>
 			      <QuoteCard quote={this.state.quote[0]}/></>)
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchQuotes);




