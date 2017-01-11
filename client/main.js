import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
//import Banner from './components/banner';
import FanCreate from './components/fan-create';
import Admin from './components/admin';
import Reward from './components/reward';
import AdminButton from './components/admin-button';
import Thanks from './components/thanks';
import { Fans } from '../imports/collections/fans';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={FanCreate} />
			<Route path='admin' component={Admin} />
			<Route path='reward/:id' component={Reward} />
			<Route path='thanks' component={Thanks} />
		</Route>
	</Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
