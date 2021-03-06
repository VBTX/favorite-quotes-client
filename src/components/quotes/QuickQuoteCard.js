import React from 'react';
import './QuickCard.css';
import { Link } from 'react-router-dom';
import { createQuote } from '../../actions/myQuotes';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
		<Card className='QuickCard'>
			<Card.Body>
				<h3>
					<i>
						<strong>
							{quote.text ? (
								<Link
									to={`/my-quotes/${quote.id}`}
									className='link'
									key={quote.id}
								>
									{quote.text || quote.quote}
								</Link>
							) : (
								<h4>{quote.text || quote.quote}</h4>
							)}
						</strong>
					</i>
				</h3>
			</Card.Body>
			<Card.Header>
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
			</Card.Header>
			{quote.quote ? (
				<>
					<Button
						type='submit'
						variant='success'
						onClick={event => {
							handleSubmit(event);
						}}
					>
						Add to Favorites
					</Button>
				</>
			) : null}
		</Card>
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
