
export const createNote = (noteData, history) => {
	return dispatch => {
		const sendableNoteData = {
			note: {
				text: noteData.text,
				quote_id: noteData.quoteId,
				user_id: noteData.userId
			}
		}
		return fetch("http://localhost:3001/api/v1/notes", {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},

			body: JSON.stringify(sendableNoteData)
		})
		.then(r=> r.json())
		.then(note => {
			if (note.error) {
				alert(note.error)
			} else {
			history.push("/my-quotes")
		}
		})
		.catch(console.log)
	}
}
