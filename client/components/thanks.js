import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

class Thanks extends Component {
	
	componentDidMount() {
		goHome = setTimeout(() => {
			browserHistory.push('/');
		}, 10000);
	}
	
	clearGoHome() {
		clearTimeout(goHome);
	}
	
	render() {
		return (
			<div>
				<h1>
					Congrats on the stuff. <br/> <br/>
					Hope to see you soon. <br/> <br/>
					- Jordan <br/> <br/>
				</h1>
				<Link to='/' onClick={() => {this.clearGoHome()}}><button className='pure-button'>HOME</button></Link>
			</div>
		);
	}
}

export default Thanks;