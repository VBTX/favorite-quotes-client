import React from 'react';
import { connect } from 'react-redux';
import QuotesByCategory from '../categories/QuotesByCategory';
import Form from 'react-bootstrap/Form';
class SearchCategory extends React.Component {
	state = {
		searchTerm: '',
		found: [],
		clicked: false
	};

	handleChange = e => {
		this.setState({ searchTerm: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const category = this.props.categories.filter(category =>
			category.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
		)[0];
		if (category) {
			this.setState({
				found: this.props.quotes.filter(
					quote => quote.category_id === category.id
				)
			});
		} else {
			this.setState({ found: [], clicked: !this.state.clicked });
		}
	};

	render() {
		return (
			<>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Control
							type='text'
							name='search'
							placeholder='Search by category'
							onChange={this.handleChange}
						/>
					</Form.Group>
				</Form>
				<br />
				<br />
				<QuotesByCategory
					quotes={this.state.found}
					clicked={this.state.clicked}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		quotes: state.myQuotes,
		categories: state.categories
	};
};

export default connect(mapStateToProps)(SearchCategory);
