import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

class Reward extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSelection(val) {
		Meteor.call('fans.addReward', {id: this.props.params.id, reward: val}, function(error, result) {
				console.log('result: ', result)		
			});
  }

  render() {
    return (
			<div>
				<button ref='selection' className='pure-button reward-btn' onClick={this.handleSelection.bind(this, 'download')}>DOWNLOAD UNRELEASED TRACK</button>
				<button ref='selection' className='pure-button reward-btn' onClick={this.handleSelection.bind(this, 'discount')}>10% OFF BURCHENDISE</button>
				<button ref='selection' className='pure-button reward-btn' onClick={this.handleSelection.bind(this, 'mystery')}>MYSTERY PRIZE</button>
			</div>
    );
  };
};

export default Reward;