import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Fans } from '../../imports/collections/fans';
import * as _ from 'lodash';

class FanList extends Component {
  removeFan(id) {
    Meteor.call('fans.remove', id)
  }

  renderRows() {
    return this.props.fans.map(fan => {
      return (
        <tr key={_.uniqueId()}>
          <td key={_.uniqueId()}>{fan.email}</td>
          <td key={_.uniqueId()}>{fan.city}</td>
          <td key={_.uniqueId()}>{fan.selection}</td>
          <td key={_.uniqueId()} onClick={() => { this.removeFan(fan._id) }}>X</td>
          {/*Above, the onClick is calling for each child upon render...}*/}
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
            <th>delete</th>
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
