import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Fans } from '../../imports/collections/fans';

class FanList extends Component {
  renderRows() {
    return this.props.fans.map(fan => {
      return (
        <tr key={fan.email}>
          <td>{fan.email}</td>
          <td>city</td>
          <td>selection</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table className='pure-table'>
        <thead>
          <tr>
            <th>email</th>
            <th>city</th>
            <th>selection</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('fans');

  return { fans: Fans.find({}).fetch() };
}, FanList);
