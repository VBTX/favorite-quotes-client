import React, { Component } from 'react';
import 'isomorphic-fetch';
import FetchedQuotes from './FetchedQuotes'


const BASE_URL = 'http://quotes.rest/qod.json?category='

class SearchableQuote extends Component{

	state = {
		searchTerm: "",
		quotes: []
	}

	handleSubmit = (event) => {
		event.preventDefault();

	   fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => console.log(res));
	};

	handleChange = (event) => {
		this.setState({searchTerm: event.target.value});

	}

	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
			<h2>Search Quotes</h2>
			<input type="text" onChange={this.handleChange}/>
			<button type="submit">Submit</button>
			</form>
			<FetchedQuotes quotes={this.state.quotes} />
			</div>
			)
	}
}



export default SearchableQuote;

// this.setState({ quotes: res.results })

http://quotes.rest/quote/random.json
http://quotes.rest/quote/image/search.json
