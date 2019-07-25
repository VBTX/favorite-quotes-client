import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Login from "./components/LoginForm"
import { getCurrentUser } from "./actions/currentUser"

class App extends Component {

	componentDidMount(){
      this.props.getCurrentUser()
   
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Login />
      </header>

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
