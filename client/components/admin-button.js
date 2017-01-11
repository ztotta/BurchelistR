import React, { Component } from 'react';

class AdminButton extends Component {
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
      <button>Admin</button>
    );
  };
};

export default AdminButton;