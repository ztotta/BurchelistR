import { Meteor } from 'meteor/meteor';
import { Fans } from '../imports/collections/fans';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('fans', function() {
    return Fans.find({});
  })
});
