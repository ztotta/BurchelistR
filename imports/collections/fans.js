import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'fans.insert': function(data) {
    return Fans.insert({ email: data.email, reward: '', createdAt: new Date()});
  },
	'fans.addReward': function(data) {
		Fans.update({_id: data.id}, {$set: {reward: data.reward} });
		return Fans.findOne({_id: data.id})
	},
  'fans.remove': function(id) {
		console.log('fans.remove reached. id: ', id)
    Fans.remove(id)
  }
});

export const Fans = new Mongo.Collection('fans');
