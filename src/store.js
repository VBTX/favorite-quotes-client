import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import myQuotes from './reducers/myQuotes';
import signupForm from './reducers/signupForm';
import quoteForm from './reducers/quoteForm';
import search from './reducers/search';

const reducer = combineReducers({
	currentUser,
	loginForm,
	myQuotes,
	signupForm,
	quoteForm,
	search
});

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer = compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
