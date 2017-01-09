import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import FanCreate from './components/fan-create';
import FanList from './components/fan-list';
import { Fans } from '../imports/collections/fans';

const App = () => {
  return (
    <div>
      <Header />
      <FanCreate />
      <FanList />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
