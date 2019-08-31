import React from 'react'
import { connect } from 'react-redux'
import Logout from '../login/Logout'
// import Login from './LoginForm'
import { NavLink } from 'react-router-dom'
// import { setSearch } from '../actions/search'

// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'



const NavBar = ({setSearch, quotes}) => {

	return (
		<div className="nav">
		<NavLink exact className="activeClass nav-link" to="/">Home  </NavLink>
		<NavLink exact className="activeClass nav-link" to="/my-quotes">My Quotes </NavLink>
		<NavLink exact className="activeClass nav-link" to="/my-quotes/new">New Quote  </NavLink>
		<NavLink exact className="activeClass nav-link" to="/search"> Search Quotes </NavLink>
		<Logout />
		</div>
		)
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser,
  }
}


export default connect(mapStateToProps)(NavBar)
	// <NavLink exact activeClass to="/logout">Log Out</NavLink>

// <div className="nav">