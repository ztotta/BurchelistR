import React, { Component } from 'react';

class FanCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.refs.email.value)

    Meteor.call('fans.insert', this.refs.email.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='pure-form'>
        <label>Email</label>
        <input ref='email' />
        <div>{this.state.error}</div>
        <button className='pure-button'>Friends 4Ever</button>
      </form>
    );
  };

  // return (
  //   <form className='pure-form'>
  //     <label>Email</label>
  //     <input/>
  //     <button className='pure-button'>Friends 4Ever</button>
  //   </form>
  // );
};

export default FanCreate;
