import React from 'react';
// import Login from './LoginForm'
// import Signup from './SignUp'
import Logout from './Logout'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../App.css';


const Home = ({currentUser, loggedIn}) => (
	<div>
	<p><h1> Welcome, {currentUser.name}! </h1></p>
	
		
	</div>
);



const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Home)