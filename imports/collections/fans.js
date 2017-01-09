import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'fans.insert': function(email) {
    console.log('attempting to insert: ', email)
    Fans.insert({ email: email });

  }
});

export const Fans = new Mongo.Collection('fans');
