import React, { Component } from 'react';

class FanCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('fans.insert', {email: this.refs.email.value, city: this.refs.city.value, selection: this.refs.selection.value});
  }
	
	goToAdmin() {
		console.log('goToAdmin');
	}	

  render() {
    return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)} className='pure-form'>
					<input ref='email' />
					<div>{this.state.error}</div>
					<button className='pure-button submit-btn'>Submit</button>
				</form>
				<button onClick={() => {this.goToAdmin()}}>To admin</button>
			</div>
    );
  };
};

export default FanCreate;
