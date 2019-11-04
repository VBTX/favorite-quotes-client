import React, { Component } from 'react';
import { setSearch, resetSearchForm } from '../../actions/search';
import { connect } from 'react-redux';
// import QuoteCard from '../quotes/QuoteCard';
import QuickQuoteCard from '../quotes/QuickQuoteCard';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Search.css';

class SearchQuotes extends Component {
	state = {
		quote: {},
		searched: false
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		const input = {
			[name]: value
		};

		this.props.setSearch(input);
	};

	handleSubmit = event => {
		event.preventDefault();
		const { quotes, search } = this.props;
		const quote = quotes.filter(q => q.text.includes(search.search));
		if (quote.length > 0) {
			this.setState({ quote: quote, searched: true });
		} else {
			this.setState({ quote: quote, searched: true });
		}
		resetSearchForm();
	};

	render() {
		return (
			<div className='container'>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Control
							name='search'
							size='lg'
							placeholder='Search Your Quotes'
							type='text'
							onKeyUp={this.handleInputChange}
						/>
						<Button className='success' type='submit' size='lg'>
							SEARCH
						</Button>
					</Form.Group>
				</Form>
				<br />
				<div className='quotes'>
					{this.state.searched && this.state.quote[0] ? (
						<QuickQuoteCard quote={this.state.quote[0]} />
					) : !this.state.searched ? null : (
						<h2>No quote matched your search</h2>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		search: state.search,
		quotes: state.myQuotes
	};
};

const mapDispatchToProps = {
	setSearch
};
export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(SearchQuotes)
);
