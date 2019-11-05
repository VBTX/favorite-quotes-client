import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/currentUser';
import { updateLoginForm } from '../../actions/loginForm';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({ loginForm, updateLoginForm, login, history }) => {
	const handleInputChange = event => {
		const { name, value } = event.target;
		const updatedFormInfo = {
			...loginForm,
			[name]: value
		};
		updateLoginForm(updatedFormInfo);
		//passing the object into a function that came from imported action
	};

	const handleSubmit = event => {
		event.preventDefault();
		login(loginForm, history);
	};

	return (
		<div className='container'>
			<Form onSubmit={handleSubmit} size='lg'>
				<Form.Group>
					<input
						type='text'
						name='email'
						value={loginForm.email}
						placeholder='email'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group>
					<input
						type='password'
						name='password'
						value={loginForm.password}
						placeholder='password'
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Button type='submit' variant='outline-primary'>
					Log In
				</Button>
				{/* </form> */}
			</Form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		loginForm: state.loginForm
	};
};

export default connect(
	mapStateToProps,
	{ updateLoginForm, login }
)(Login);
