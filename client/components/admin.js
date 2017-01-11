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
          <td key={_.uniqueId()} onClick={() => { this.removeFan(fan._id) }}>X</td>
         </tr>
      )
    })
  }
	
	returnHome() {
		browserHistory.push('/');
	}

  render() {
    return (
			<div>
				<button onClick={this.returnHome.bind(this)} className='pure-button'>Home</button>
				<table className='pure-table'>
					<thead>
						<tr>
							<th>email</th>
							<th>selection</th>
							<th>delete</th>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
			</div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('fans');

  return { fans: Fans.find({}).fetch() };
}, Admin);
