import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Fans } from '../../imports/collections/fans';
import * as _ from 'lodash';

class Admin extends Component {
	
  removeFan(id) {
    Meteor.call('fans.remove', id)
  }

  renderRows() {
    return this.props.fans.map(fan => {
      return (
        <tr key={_.uniqueId()}>
          <td key={_.uniqueId()}>{fan.email}</td>
          <td key={_.uniqueId()}>{fan.reward}</td>
          <td key={_.uniqueId()}>{fan.createdAt.toString().split(' ')[1] + ' '
							+ fan.createdAt.toString().split(' ')[2] + ', '
         			+ fan.createdAt.toString().split(' ')[3]}
         </td>
          <td key={_.uniqueId()} onClick={() => { this.removeFan(fan._id) }}>X</td>
         </tr>
      )
    })
  }

  render() {
    return (
			<div>
				<Link to='/'><button className='pure-button submit-btn'>Home</button></Link>
				<table className='pure-table admin-table'>
					<thead>
						<tr>
							<th>email</th>
							<th>reward</th>
							<th>date</th>
							<th>delete</th>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
				<Link to='/'><button className='pure-button submit-btn'>Home</button></Link>
			</div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('fans');

  return { fans: Fans.find({}).fetch() };
}, Admin);
