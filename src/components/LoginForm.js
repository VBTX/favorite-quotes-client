import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser'

const Login = ({}) => {









}

const mapStateToProps = state => {
	return {
		loginForm
	}
}

export default connect(mapStateToProps, {updateLoginForm, login })(Login)