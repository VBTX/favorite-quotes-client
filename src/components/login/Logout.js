import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Logout = ({ logout, history }) => {
	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				logout(history);
			}}
		>
			<Button
				type='submit'
				className='nav-link'
				variant='outline-primary'
				style={{ border: 'none', background: 'none', fontSize: '28px' }}
			>
				Log Out
			</Button>
		</form>
	);
};

export default withRouter(
	connect(
		null,
		{ logout }
	)(Logout)
);
