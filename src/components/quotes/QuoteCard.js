import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Note from '../notes/Note';
import { connect } from 'react-redux';
import NoteList from '../notes/NoteList';
import { withRouter } from 'react-router-dom';
import './QuoteCard.css';

const QuoteCard = props => {
	return props.quote ? (
		<div className='quote'>
			<Card className='card' style={{ position: 'relative' }}>
				<Card.Header>
					<b>
						<h1>Author: {props.quote.author} </h1>
					</b>
				</Card.Header>
				<br />
				<Card.Body>
					<ListGroup variant='flush'>
						<h2>{props.quote.text}</h2>
						<br />
						<br />
						<h6>Source: {props.quote.source}</h6>
						<Button variant='secondary'>
							<Link
								className='button-link'
								to={`/my-quotes/${props.quote.id}/edit`}
							>
								<h6>EDIT QUOTE</h6>
							</Link>
						</Button>
					</ListGroup>
				</Card.Body>
			</Card>
			<Card className='card'>
				<Card.Header>
					<b>
						<h1>Your Notes</h1>
					</b>
				</Card.Header>
				<br />
				<Card.Body>
					<ListGroup variant='flush'>
						<NoteList notes={props.quote.notes} history={props.history} />
						<Note quoteId={props.quote.id} userId={props.currentUser.id} />
					</ListGroup>
				</Card.Body>
			</Card>
		</div>
	) : null;
};

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser
	};
};
export default withRouter(connect(mapStateToProps)(QuoteCard));
