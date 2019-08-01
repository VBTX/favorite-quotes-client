import React from 'react';
import Button from 'react-bootstrap/Button';
import { createNote } from "../actions/myNotes"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'

class Note extends React.Component {

  state={
    text: ""
  }
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]:value
    })
  }
  	

  handleSubmit = (event, userId, quoteId, history) => {
  	event.preventDefault()
    // this.setState({...this.state.text, [this.state.submit]: true})
  	this.props.createNote({text: this.state.text, userId:this.props.userId, quoteId:this.props.quoteId}, this.props.history)
    this.mainInput.value = ""
    };
  

  render() {
    return (
      <div>
      	<form onSubmit={this.handleSubmit}>
        <ListGroup variant="flush">
      	<h3>Add a note:</h3>
      	<textarea ref={(ref) => this.mainInput= ref} type="text" name="text" value={this.props.text}
      	onChange={this.handleChange} /><br/>
      	<Button type="submit" variant="secondary">SUBMIT</Button>
         </ListGroup>
      	</form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.currentUser.id
  }
}

export default withRouter(connect(mapStateToProps, { createNote })(Note));


// <ul>
//           {this.state.comments.map((c,i) => <li key={i}> {c} </li>)}

//         </ul>    


// this.setState({ 
//       text: event.target.value
//     })
//   }



    // reduxaction(us)
  //  this.setState({
  //    comments:[...this.state.comments, comment],
  //    text:""
  //  })

  // }
