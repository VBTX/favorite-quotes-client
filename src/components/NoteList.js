
import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { deleteNote } from '../actions/myNotes'

const NoteList = ({notes, deleteNote, history }) => {
  return (
    <div><ul>{notes.map((n, i) => <h3  key={i} align="left"><li>{n.text} <Button variant="outline-danger" onClick={()=>deleteNote(n, history)}>X</Button></li></h3>)}</ul></div>
  );
};







export default connect(null, { deleteNote })(NoteList)