
import React from 'react'

const NoteList = ({notes}) => {
  return (
    <div><ul>{notes.map((n, i) => <h3  key={i}><li>{n.text}</li></h3>)}</ul></div>
  );
};


export default NoteList