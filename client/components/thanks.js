import React from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

const Thanks = () => {
	return (
		<div>
			<h1>
				Congrats on the stuff. <br/>
				Hope to see you soon. <br/>
				- Jordan
			</h1>
			<Link to='/'><button className='pure-button'>HOME</button></Link>
		</div>
	);
}

export default Thanks;