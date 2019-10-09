import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../App.css';
import RandomQuote from '../quotes/RandomQuote';
import Button from 'react-bootstrap/Button';

const Home = ({ currentUser, loggedIn }) => {
	return (
		<>
			{currentUser ? (
				<>
					<h1 style={{ fontFamily: "'Special Elite', cursive" }}>
						<b> Welcome, {currentUser.name}! </b> <RandomQuote />
					</h1>
				</>
			) : (
				<>
					<h1 style={{ fontFamily: "'Special Elite', cursive" }}>
						<b>
							{' '}
							Welcome, stranger! :)
							<br />
							<br />
							If you want to start collecting your favorite quotes,
							<br /> please{' '}
							<Button
								variant='primary'
								size='lg'
								style={{ fontFamily: 'sans-serif' }}
							>
								<Link to='/signup' className='button-link'>
									SIGN UP
								</Link>
							</Button>{' '}
							or{' '}
							<Button
								variant='success'
								size='lg'
								style={{ fontFamily: 'sans-serif' }}
							>
								<Link to='/login' className='button-link'>
									LOG IN
								</Link>
							</Button>
							!
						</b>
					</h1>
				</>
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
