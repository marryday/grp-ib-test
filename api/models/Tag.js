 
const {Schema, model, connect} = require('mongoose');
const {ObjectId} = require('mongoose').Schema.Types;

// connect(`mongodb://localhost:27017/Group-ib`, { 
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex:true
// });
const tagSchema = new Schema({
  ageLimit: String,
  duration: String,
  price: Number,
  location: String,
})

const Tag = model('Tag', tagSchema);

module.exports = Tag;