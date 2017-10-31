var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var EventSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;