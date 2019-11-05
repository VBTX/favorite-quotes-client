import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = ({ logout, history }) => {
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
			<NavLink
				exact
				type='submit'
				onClick={() => logout(history)}
				className='nav-link'
				to='/'
			>
				Log Out
			</NavLink>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		loggedIn: !!state.currentUser
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ logout }
	)(NavBar)
);
