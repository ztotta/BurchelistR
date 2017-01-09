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

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='pure-form'>
        <label>Email</label>
        <input ref='email' />
        <label>City</label>
        <input ref='city' />
        <label>Selection</label>
        <input ref='selection' />
        <div>{this.state.error}</div>
        <button className='pure-button'>Friends 4Ever</button>
      </form>
    );
  };
};

export default FanCreate;
