import { createStore, applyMiddleware, combineReducers, compose } from 'redux' 

const reducer = combineReducers({
	})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store