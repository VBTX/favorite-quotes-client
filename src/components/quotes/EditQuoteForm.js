import React, { Component } from 'react';
import { setFormDataForEdit } from '../../actions/quoteForm';
import { updateQuote } from '../../actions/myQuotes';
import { connect } from 'react-redux';
import QuoteForm from './QuoteForm';
import { resetQuoteForm } from '../../actions/quoteForm';

class EditQuoteForm extends Component {
	componentDidMount() {
		this.props.quote && this.props.setFormDataForEdit(this.props.quote);
	}

	componentDidUpdate(prevProps) {
		this.props.quote &&
			!prevProps.quote &&
			this.props.setFormDataForEdit(this.props.quote);
	}

	componentWillUnmount() {
		this.props.resetQuoteForm();
	}
	handleSubmit = (event, formData, userId) => {
		const { updateQuote, quote, history } = this.props;
		event.preventDefault();
		updateQuote(
			{
				...formData,
				quoteId: quote.id,
				userId
			},
			history
		);
	};

	render() {
		return (
			<>
				<QuoteForm
					editMode
					history={this.history}
					handleSubmit={this.handleSubmit}
				/>
			</>
		);
	}
}

export default connect(
	null,
	{ updateQuote, setFormDataForEdit, resetQuoteForm }
)(EditQuoteForm);
