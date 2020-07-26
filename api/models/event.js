 
const {Schema, model,connect} = require('mongoose');
const {ObjectId} = require('mongoose').Schema.Types;

const eventSchema = new Schema({
  title: {
    type: String,
    required:[true, 'Укажите заголовок мероприятия'],
  },
  img: {
    type: String,
  },
  date: {
    type: String,
    required:[true, 'Укажите дату']
  },
  description:{
    type: String,
  },
  tag: {
    type: ObjectId,
    ref: 'Tag'
  },
  favorites: {
    type: String,
    default: false
  }
})

const Event = model('Event', eventSchema);

module.exports = Event;