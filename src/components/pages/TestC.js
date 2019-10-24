import React, { Component } from 'react';

export default class TestC extends Component {
	constructor() {
		super();
		this.state = {
			text: 'initial state',
			toggled: false
		};
	}

	handleClick = e => {
		e.preventDefault();
		this.setState({ ...this.state, toggled: !this.state.toggled });
	};

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.toggled ? 'I was clicked' : 'No one clicked me'}
			</button>
		);
	}
}
