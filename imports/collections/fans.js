import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'fans.insert': function(data) {
    Fans.insert({ email: data.email, city: data.city, selection: data.selection });
  },
  'fans.remove': function() {
    console.log('fans.remove reached');
  }
});

export const Fans = new Mongo.Collection('fans');
