const mongoose = require('mongoose');
const shortid = require('shortid');

const shortyschema = mongoose.Schema({
    LONG_URL:{
        type: String,
        required:true,
    },
    SHORT_URL:{
        type:String,
        required:true,
        default:shortid.generate()
    }
})

module.exports = mongoose.model('TABLE_URL',shortyschema);