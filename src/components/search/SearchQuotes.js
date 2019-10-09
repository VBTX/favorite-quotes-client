import React, { Component } from 'react';
import { setSearch, resetSearchForm } from '../../actions/search';
import { connect } from 'react-redux';
import QuoteCard from '../quotes/QuoteCard';
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
			<>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Control
							name='search'
							size='lg'
							placeholder='Search Your Quotes'
							type='text'
							onChange={this.handleInputChange}
						/>
						<Button variant='success' type='submit'>
							SEARCH
						</Button>
					</Form.Group>
				</Form>
				<br />
				<div className='col-md-12' style={{ display: 'flex' }}>
					{this.state.quote.length === 0 ? (
						<h2>No quote matched your search</h2>
					) : (
						<QuoteCard quote={this.state.quote[0]} />
					)}
				</div>
			</>
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
