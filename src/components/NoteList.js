
import React from 'react'
// import Popup from "reactjs-popup";
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { deleteNote } from '../actions/myNotes'
import NoteEditForm from './NoteEditForm'

class NoteList extends React.Component{

   state = {
   	clicked: false,
   	n: {}
   }


  handleClick = (note) => {
  	this.setState({...this.state, clicked: true, n:note})
  }
  
render(){
  return (
    <div>
    
    <ul>
    {this.props.notes.map((n, i) =>
    	<h3 key={i} align="left">
    	<li>{n.text}<Button variant="outline-success" onClick={()=>{this.handleClick(n)}}>Edit</Button>
      <Button variant="outline-danger" onClick={()=>this.props.deleteNote(n, this.props.history)}>X</Button></li><br/>{this.state.clicked === true && n.id === this.state.n.id && n.text === this.state.n.text ? <NoteEditForm note={this.state.n} state={this.state}/> : null}
      
    	</h3>
    	)}
    </ul>
    </div>
  )};
};


// 




export default connect(null, { deleteNote })(NoteList)

// {(event)=>console.log(event, history, n)} ({notes, deleteNote, updateNote, history }) => 

// { this.state.clicked === true? console.log(this.state.clicked) : null}