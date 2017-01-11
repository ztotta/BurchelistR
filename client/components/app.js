import React from 'react';

//import Banner from './banner';
import FanCreate from './fan-create';
import FanList from './fan-list';
import AdminButton from './admin-button';
import { Fans } from '../../imports/collections/fans';

export default (props) => {
  return (
    <div className='pure-g-1-1 main-container'>
			{props.children}
    </div>
  );
};