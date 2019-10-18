import { resetLoginForm } from './loginForm';
import { getMyQuotes } from './myQuotes';
import { clearQuotes } from './myQuotes';
import { resetSignUpForm } from './signupForm';

//SYNC

export const setCurrentUser = user => {
	return {
		type: 'SET_CURRENT_USER',
		user
	};
};

export const clearCurrentUser = () => {
	return {
		type: 'CLEAR_CURRENT_USER'
	};
};

//ASYNC
export const signup = (credentials, history) => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/signup', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
			.then(r => r.json())
			.then(user => {
				if (user.error) {
					alert(user.error);
				} else {
					dispatch(setCurrentUser(user));
					dispatch(resetSignUpForm());
					history.push('/');
				}
			})
			.catch(console.log);
	};
};

export const login = (credentials, history) => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/login', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
			.then(r => r.json())
			.then(user => {
				if (user.error) {
					alert(user.error);
				} else {
					dispatch(setCurrentUser(user));
					dispatch(getMyQuotes());
					dispatch(resetLoginForm());
					history.push('/');
				}
			})
			.catch(console.log);
	};
};

export const getCurrentUser = () => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/get_current_user', {
			credentials: 'include',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(r => r.json())
			.then(user => {
				if (user.error) {
					alert(user.error);
				} else {
					dispatch(setCurrentUser(user));
					dispatch(getMyQuotes());
				}
			})
			.catch(console.log);
	};
};

export const logout = history => {
	return dispatch => {
		dispatch(clearCurrentUser());
		dispatch(clearQuotes());
		history.push('/');
		return fetch('http://localhost:3001/api/v1/logout', {
			credentials: 'include',
			method: 'DELETE'
		});
	};
};
