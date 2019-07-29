import React, { Component } from 'react';
import 'isomorphic-fetch';
import Button from 'react-bootstrap/Button';
import QuickQuoteCard from './QuickQuoteCard'

const BASE_URL = "http://quotes.rest/qod.json"



class RandomQuote extends Component {

	state = {
		quote: {},
		clicked: false
	}


	
	handleSubmit = (event) => {
		event.preventDefault();
	    fetch(BASE_URL)
        .then(res => res.json())
        .then(res => {
        	if (this.state.clicked === false){
        		this.setState({quote:res.contents.quotes[0], clicked: true})
        	} else {
        		this.setState({quote:{}, clicked: false})
        	}

        		});
};


render() {
	return (
		<>
		<br/>
		<br/>
		{ this.state.clicked === false ?
				<Button type="submit" variant="success" onClick={this.handleSubmit}>GET QUOTE OF THE DAY</Button> :

				<Button type="submit" variant="secondary" onClick={this.handleSubmit}>HIDE QUOTE OF THE DAY</Button>
			}
		<br/>
		<br/>
		<br/>
		{ this.state.quote.length > 0 ?
		<div align="center" style={{"margin-left": "0px"}}><QuickQuoteCard quote={this.state.quote}/></div> : null }
		</>

		)
}
}


export default RandomQuote

