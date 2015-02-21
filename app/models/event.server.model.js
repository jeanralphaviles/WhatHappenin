'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Event Schema
 */
var EventSchema = new Schema({
  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Event needs a description'
  },
  end_time: {
    type: Date,
    required: 'Need end time'
  } ,
  location: {
    type: String,
    trim: true,
    required: 'Need a location to be set'
  },
  name: {
    type: String,
    trim: true,
    required: 'Need a name for the event'
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  start_time: {
    type: Date,
    required: 'Need a start time'
  },
  ticket_uri: {
    type: String,
    trim: true,
  }
});

mongoose.model('Event', EventSchema);
