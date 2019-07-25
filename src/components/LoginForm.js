import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser'
import { updateLoginForm } from '../actions/loginForm'

const Login = ({ loginForm, updateLoginForm, login, history }) => {
	const handleInputChange = event =>  {
		const { name, value } = event.target
		const updatedFormInfo = {
			...loginForm,
			[name]:value

		}
		updateLoginForm(updatedFormInfo)
		//passing the object into a function that came from imported action
	
	}

	const handleSubmit = event => {
		event.preventDefault()
		login(loginForm, history)

}

return (
		<form onSubmit={handleSubmit}>
		<input 
		type="text"
		name="email"
		value={loginForm.email}
		placeholder="email"
		onChange={handleInputChange}
		/>
		<input 
		type="password"
		name="password"
		value={loginForm.password}
		placeholder="password"
		onChange={handleInputChange}
		/>
		<input type="submit" value="Log In"/>
		</form>

		)
}

const mapStateToProps = state => {
	return {
		loginForm: state.loginForm
	}
}

export default connect(mapStateToProps, {updateLoginForm, login })(Login)