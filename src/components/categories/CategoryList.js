import React from 'react'
// import Popup from "reactjs-popup";
import { connect } from 'react-redux'
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
// import { deleteNote } from '../actions/myNotes'
// import NoteEditForm from './NoteEditForm'

class CategoryList extends React.Component{

  // handleClick = (note) => {
  // 	this.setState({...this.state, clicked: true, n:note})
  // }
  
render(){
  return (
    <div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
      {this.props.categories.map((c, i)=> <Dropdown.Item href="#/action-1" key={i}>{c.name}</Dropdown.Item>)
        }
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )};
}

// 
const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryList)


  // {this.props.categories.map((c, i) =>
    //  <h3 key={i} align="left">{c.name}</h3>
    //  )}