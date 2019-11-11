import { getMyQuotes } from './myQuotes';

export const createNote = (noteData, history) => {
	return dispatch => {
		const sendableNoteData = {
			note: {
				text: noteData.text,
				quote_id: noteData.quoteId,
				user_id: noteData.userId
			}
		};
		return fetch('http://localhost:5000/api/v1/notes', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify(sendableNoteData)
		})
			.then(r => r.json())
			.then(note => {
				if (note.error) {
					alert(note.error);
				} else {
					dispatch(getMyQuotes());
					history.push(history.location.pathname);
				}
			})
			.catch(console.log);
	};
};

export const updateNote = (noteData, history) => {
	return dispatch => {
		const sendableNoteData = {
			note: {
				text: noteData.text,
				// quote_id: noteData.quoteId,
				id: noteData.noteId
			}
		};
		return fetch(`http://localhost:5000/api/v1/notes/${noteData.noteId}`, {
			credentials: 'include',
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sendableNoteData)
		})
			.then(r => r.json())
			.then(note => {
				if (note.error) {
					alert(note.error);
				} else {
					dispatch(getMyQuotes());
					history.push(history.location.pathname);
				}
			})
			.catch(console.log);
	};
};

export const deleteNote = (note, history) => {
	return dispatch => {
		return fetch(`http://localhost:5000/api/v1/notes/${note.id}`, {
			credentials: 'include',
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(r => r.json())
			.then(note => {
				if (note.error) {
					alert(note.error);
				} else {
					dispatch(getMyQuotes());
					history.push(history.location.pathname);
				}
			})
			.catch(console.log);
	};
};
