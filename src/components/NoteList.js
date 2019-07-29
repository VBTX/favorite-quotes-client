
import React from 'react'

const NoteList = ({notes}) => {
  return (
    <div><ul>{notes.map((n, i) => <li key={i}>{n.text}</li>)}</ul></div>
  );
};


export default NoteList