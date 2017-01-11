import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Banner from './components/banner';
import FanCreate from './components/fan-create';
import FanList from './components/fan-list';
import AdminButton from './components/admin-button';
import { Fans } from '../imports/collections/fans';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		</Route>
		<Route path='/admin' component={FanList}>
		</Route>
	</Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
