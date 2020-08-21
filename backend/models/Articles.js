const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Articles = new Schema({
   name: {
      type: String
   },
   amount: {
      type: Number
   },
   price: {
      type: Number
   },
   total:{
       type: Number
   }
}, {
   collection: 'articles'
})

module.exports = mongoose.model('Article', Articles)