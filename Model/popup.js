const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Newsletter = new Schema({
   name:{
        type:String
    },
   email:{
        type:String
    }
    
})

module.exports = mongoose.model('Newsletter',Newsletter);