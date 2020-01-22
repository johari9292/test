const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Popup = new Schema({
   firstname:{
        type:String
    },
   lastname:{
        type:String
    }, 
   email:{
        type:String
    },
   phone:{
        type:String
    },
    job:{
        type:String
    },
    question:{
        type:String
    },
    
})

module.exports = mongoose.model('Popup',Popup);