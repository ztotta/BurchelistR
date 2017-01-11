import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

class FanCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
		
		if (this.refs.email.value === 'admin') {
			browserHistory.push('/admin');
			return;
		};
			
    var currentId = '';
	
		Meteor.call('fans.insert', {email: this.refs.email.value}, function(error, result) {
				currentId = result;
				browserHistory.push('/reward/' + currentId);
			});
  }

  render() {
    return (
			<div className='flex-me'>
				<div className='pure-u-1-1 banner'>
					<h1>Enter your email for stuff and other stuff.</h1>
    		</div>
				<form onSubmit={this.handleSubmit.bind(this)} className='pure-form'>
					<input ref='email' />
					<div>{this.state.error}</div>
					<button className='pure-button submit-btn'>Submit</button>
				</form>
			</div>
    );
  };
};

export default FanCreate;
