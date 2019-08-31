import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../../actions/signupForm'
import { signup } from '../../actions/currentUser'

const SignUp = ({ signupForm, updateSignUpForm, signup, history }) => {

	const handleInputChange = event =>  {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signupForm,
			[name]:value

		}
		updateSignUpForm(updatedFormInfo)
	}

	const handleSubmit = event => {
		event.preventDefault()
		signup(signupForm, history)

	}
	return (
		<form onSubmit={handleSubmit}>
		<input 
		type="text"
		name="name"
		value={signupForm.name}
		placeholder="name"
		onChange={handleInputChange}
		/>
		<input 
		type="text"
		name="email"
		value={signupForm.email}
		placeholder="email"
		onChange={handleInputChange}
		/>
		<input 
		type="password"
		name="password"
		value={signupForm.password}
		placeholder="password"
		onChange={handleInputChange}
		/>
		<input type="submit" value="Sign Up"/>
		</form>

		)
}
const mapStateToProps = state => {
	return {
		signupForm: state.signupForm
	}
}

export default connect(mapStateToProps, {updateSignUpForm, signup })(SignUp)