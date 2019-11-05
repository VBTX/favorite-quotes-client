import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../App.css';
import RandomQuote from '../quotes/RandomQuote';

const Home = ({ currentUser, loggedIn }) => {
	return (
		<>
			{currentUser ? (
				<>
					<br />
					<h2 style={{ fontFamily: "'Special Elite', cursive" }}>
						<b> Welcome, {currentUser.name}! </b> <RandomQuote />
					</h2>
				</>
			) : (
				<div className='container'>
					<h1 style={{ fontFamily: "'Special Elite', cursive" }}>
						<b>
							{' '}
							Welcome, stranger! :)
							<br />
							<br />
							If you want to start collecting your favorite quotes,
							<br /> please{' '}
							<Link
								to='/signup'
								className='button-link'
								style={{ background: 'black' }}
							>
								SIGN UP
							</Link>
							or{' '}
							<Link
								to='/login'
								className='button-link'
								style={{ background: 'black' }}
							>
								LOG IN
							</Link>
						</b>
					</h1>
				</div>
			)}
		</>
	);
};

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		loggedIn: !!state.currentUser
	};
};

export default connect(mapStateToProps)(Home);
