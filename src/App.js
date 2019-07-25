import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import SignUp from "./components/Signup"
import Login from "./components/LoginForm"
import Home from "./components/Home"
import { getCurrentUser } from "./actions/currentUser"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import { Link } from "react-router-dom";

class App extends Component {

	componentDidMount(){
      this.props.getCurrentUser()
   
  }

  render(){
  const {loggedIn, allQuotes} = this.props
  return (
    <div className="App">
    <Router>
    {loggedIn ? <NavBar /> : <h3>Welcome! Please <Link to="/signup" className="link">Sign Up</Link> or <Link to="/login" className="link">Log In</Link>!</h3> }   
    <h1>App component</h1>
    <Route exact path="/login" component={Login}/>
    </Router>
    </div>

  );
}
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    allQuotes: state.myQuotes

  })
}


export default connect(mapStateToProps, { getCurrentUser })(App)


 // { loggedIn ? <Home /> : <Login /> }