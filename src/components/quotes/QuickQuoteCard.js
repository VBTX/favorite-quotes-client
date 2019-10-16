import React from 'react';
import './QuickCard.css';
import { Link } from 'react-router-dom';
import { createQuote } from '../../actions/myQuotes';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const QuickQuoteCard = ({ quote, createQuote, userId, history }) => {
	const handleSubmit = event => {
		event.preventDefault();
		createQuote(
			{
				quote,
				userId
			},
			history
		);
	};

	return (
		<div className='QuickCard'>
			<h3>
				<i>
					<strong>
						<Link to={`/my-quotes/${quote.id}`} className='link' key={quote.id}>
							{quote.text || quote.quote}
						</Link>
					</strong>
				</i>
			</h3>
			<br />
			<h5>
				Author:{' '}
				<a
					href={`https://www.google.com/search?q=${quote.author}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					{quote.author}
				</a>
				; Source: {quote.source || <a href='theysaidso.com'>TheySaidSo</a>}
			</h5>
			{quote.quote ? (
				<Button
					type='submit'
					variant='success'
					onClick={event => {
						handleSubmit(event);
					}}
				>
					Add to Favorites
				</Button>
			) : null}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		userId: state.currentUser.id
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ createQuote }
	)(QuickQuoteCard)
);

// handleToggle = event => {
// 	console.log(event)
// 	this.setState({toggled: !this.state.toggled})
// }
