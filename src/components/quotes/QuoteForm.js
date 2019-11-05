import React from 'react';
import { updateQuote } from '../../actions/quoteForm';
import { deleteQuote } from '../../actions/myQuotes';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { withRouter } from 'react-router-dom';

const QuoteForm = ({
	formData,
	updateQuote,
	history,
	userId,
	quoteId,
	handleSubmit,
	editMode,
	deleteQuote
}) => {
	const handleOnChange = event => {
		const { name, value } = event.target;
		const enteredNewQuote = {
			...formData,
			[name]: value
		};
		updateQuote(enteredNewQuote);
		//passing the object into a function that came from imported action
	};
	return (
		<>
			<br />
			<br />
			<Card
				style={{
					width: '80%',
					display: 'inline-block',
					padding: '10px',
					border: '1px solid black',
					boderRadius: '50%',
					fontSize: '1.5rem'
				}}
			>
				<form
					onSubmit={event => {
						event.preventDefault();
						handleSubmit(event, formData, userId, history);
					}}
				>
					<Card.Header>
						<strong>
							<h2> Add Quote details: </h2>
						</strong>
					</Card.Header>{' '}
					<br />
					<Card.Body>
						<ListGroup variant='flush'>
							<input
								type='text'
								name='author'
								value={formData.author}
								onChange={handleOnChange}
								placeholder='author'
								border='1px solid black'
							/>
							<br />
							<textarea
								type='text'
								name='text'
								onChange={handleOnChange}
								value={formData.text}
								placeholder='quote'
							/>
							<br />
							<input
								type='text'
								name='source'
								onChange={handleOnChange}
								value={formData.source}
								placeholder='source'
							/>
						</ListGroup>
					</Card.Body>
					{editMode ? (
						<>
							<Button type='submit' style={{ background: 'black' }}>
								UPDATE
							</Button>
							<Button
								variant='danger'
								onClick={() => deleteQuote(quoteId, history)}
							>
								{' '}
								DELETE{' '}
							</Button>
						</>
					) : (
						<Button
							type='submit'
							style={{
								background: 'black',
								borderColor: 'black',
								fontSize: '1.5rem'
							}}
						>
							ADD
						</Button>
					)}
				</form>
			</Card>
		</>
	);
};

const mapStateToProps = state => {
	const userId = state.currentUser ? state.currentUser.id : '';
	return {
		formData: state.quoteForm,
		userId,
		quoteId: state.quoteForm.id
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ updateQuote, deleteQuote }
	)(QuoteForm)
);
