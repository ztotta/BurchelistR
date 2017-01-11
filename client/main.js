import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
//import Banner from './components/banner';
import FanCreate from './components/fan-create';
import FanList from './components/fan-list';
import Reward from './components/reward';
import AdminButton from './components/admin-button';
import { Fans } from '../imports/collections/fans';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={FanCreate} />
			<Route path='admin' component={FanList} />
			<Route path='reward/:id' component={Reward} />
		</Route>
	</Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
