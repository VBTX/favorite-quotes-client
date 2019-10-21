import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import myQuotes from './reducers/myQuotes';
import signupForm from './reducers/signupForm';
import quoteForm from './reducers/quoteForm';
import search from './reducers/search';
import thunk from 'redux-thunk';
import { fetchMyQuotesStart } from './actions/quotesSagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	currentUser,
	loginForm,
	myQuotes,
	signupForm,
	quoteForm,
	search
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancer(applyMiddleware(sagaMiddleware, thunk, logger))
);
sagaMiddleware.run(fetchMyQuotesStart);
export default store;
