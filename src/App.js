import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Signup from "./components/Signup"
import Login from "./components/LoginForm"
import Home from "./components/Home"
import MyQuotes from "./components/MyQuotes"
import QuoteCard from "./components/QuoteCard"
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
    <Switch>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/my-quotes" component={MyQuotes}/>
    <Route exact path="/my-quotes/:id"    render={props => {
           const quote = allQuotes.find((quote) => quote.id === parseInt(props.match.params.id));
            return <QuoteCard quote={quote} {...props}/>
            }}/>
          </Switch>
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
 // <Route exact path="/quotes/:id/edit"    render={props => {
 //           const quote = allquotes.find((quote) => quote.id === parseInt(props.match.params.id));
 //            return <EditFormWrapper quote={quote} {...props}/>
 //            }}/>