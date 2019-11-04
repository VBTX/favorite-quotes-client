import React from 'react';
import { connect } from 'react-redux';
import QuickQuoteCard from './QuickQuoteCard';
import './MyQuotes.css';

const MyQuotes = props => {
	const quoteCards =
		props.quotes.length > 0 ? (
			<div className='myQuotes'>
				<div className='container'>
					<br />
					{props.quotes.map(q => (
						<QuickQuoteCard key={q.id} quote={q} />
					))}
				</div>
			</div>
		) : (
			'No quotes at the moment'
		);
	return quoteCards;
};

const mapStateToProps = state => {
	return {
		quotes: state.myQuotes
	};
};

export default connect(mapStateToProps)(MyQuotes);
