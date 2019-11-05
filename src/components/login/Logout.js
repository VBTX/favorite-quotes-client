import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const Logout = ({ logout, history }) => {
	return (
		<NavLink
			exact
			type='submit'
			onClick={() => logout(history)}
			className='nav-link'
			to='/'
		>
			Log Out
		</NavLink>
	);
};

export default withRouter(
	connect(
		null,
		{ logout }
	)(Logout)
);
