import React from 'react';
import Button from 'react-bootstrap/Button';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    	vote: 0
    }
  }

  handleSubmitUpvote = (event) => {
  	event.preventDefault()
  	this.setState({...this.state, vote: this.state.vote+1})
  }
  handleSubmitDownvote = (event) => {
  	event.preventDefault()
  	if (this.state.vote > 0){
  			this.setState({...this.state, vote: this.state.vote-1})
  		} else {
  			return this.state
  		}
  }

  render() {
    return (
      <>
   	  <h1>{this.state.vote}</h1>		
      <div><Button type="submit" onClick={this.handleSubmitUpvote}>UPVOTE</Button>
      <Button type="submit" variant="danger" onClick={this.handleSubmitDownvote}>DOWNVOTE</Button></div>
    </>);
  }
}

export default Vote;