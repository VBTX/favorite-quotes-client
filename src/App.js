import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Signup from './components/login/Signup';
import Login from './components/login/LoginForm';
import Home from './components/pages/Home';
import MyQuotes from './components/quotes/MyQuotes';
import QuoteCard from './components/quotes/QuoteCard';
import { getCurrentUser } from './actions/currentUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import EditQuoteForm from './components/quotes/EditQuoteForm';
import NewQuoteForm from './components/quotes/NewQuoteForm';
import SearchQuotes from './components/search/SearchQuotes';

class App extends Component {
	componentDidMount() {
		this.props.getCurrentUser();
	}

	render() {
		const { loggedIn, allQuotes } = this.props;

		return (
			<div className='container'>
				<Router>
					<br />
					<br />
					<br />
					<br />
					{loggedIn ? (
						<>
							<NavBar />{' '}
						</>
					) : null}
					<br />
					<br />
					<br />
					<br />
					<br />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={Signup} />
						<Route exact path='/my-quotes' component={MyQuotes} />
						<Route exact path='/search' component={SearchQuotes} />
						<Route exact path='/my-quotes/new' component={NewQuoteForm} />
						<Route
							exact
							path='/my-quotes/:id'
							render={props => {
								const quote = allQuotes.find(
									quote => quote.id === parseInt(props.match.params.id)
								);
								return <QuoteCard quote={quote} {...props} />;
							}}
						/>
						<Route
							exact
							path='/my-quotes/:id/edit'
							render={props => {
								const quote = allQuotes.find(
									quote => quote.id === parseInt(props.match.params.id)
								);
								return <EditQuoteForm quote={quote} {...props} />;
							}}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: !!state.currentUser,
		allQuotes: state.myQuotes,
		currentUser: state.currentUser
	};
};

export default connect(
	mapStateToProps,
	{ getCurrentUser }
)(App);
