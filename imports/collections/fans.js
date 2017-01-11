import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'fans.insert': function(data) {
    Fans.insert({ email: data.email, city: data.city, selection: data.selection });
  },
  'fans.remove': function(id) {
		console.log('fans.remove reached. id: ', id)
    Fans.remove(id)
  }
});

export const Fans = new Mongo.Collection('fans');
