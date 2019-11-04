import React from 'react';
import { connect } from 'react-redux';
import Logout from '../login/Logout';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='nav'>
			<NavLink exact className='activeClass nav-link' to='/'>
				Home{' '}
			</NavLink>
			<NavLink exact className='activeClass nav-link' to='/my-quotes'>
				My Quotes{' '}
			</NavLink>
			<NavLink exact className='activeClass nav-link' to='/my-quotes/new'>
				New Quote{' '}
			</NavLink>
			<NavLink exact className='activeClass nav-link' to='/search'>
				{' '}
				Search Quotes{' '}
			</NavLink>
			<div>
				<Logout />
			</div>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		loggedIn: !!state.currentUser
	};
};

export default connect(mapStateToProps)(NavBar);
