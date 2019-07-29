import React from 'react';

class Comment extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
  	text: "",
  	comments: []
  }

  handleChange = event => {
  	this.setState({ 
  		text: event.target.value
  	})
  }

  handleSubmit = event => {
  	event.preventDefault()
  	const comment = this.state.text

  	// reduxaction(us)
  	this.setState({
  		comments:[...this.state.comments, comment],
  		text:""
  	})

  }


  render() {
    return (
      <div>
      	<form onSubmit={this.handleSubmit}>
      	<h2>Add a comment:</h2>
      	<input type="text" value={this.state.text}
      	onChange={this.handleChange} />
      	<input type="submit" />
      	</form>
      	<ul>
      		{this.state.comments.map((c,i) => <li key={i}> {c} </li>)}

      	</ul>    
      </div>
    );
  }
}

export default Comment;