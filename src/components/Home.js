import React from 'react';
// import Login from './LoginForm'
// import Signup from './SignUp'
import Logout from './Logout'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../App.css';


const Home = ({currentUser, loggedIn}) => (
	<div>
	<p> Home Component </p>
	{ loggedIn ? <Logout/> : <h3>Welcome! Please <Link to="/signup" className="link">Sign Up</Link> or <Link to="/login" className="link">Log In</Link>!</h3>} 	
		
	</div>
);



const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Home)