const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/ProductDB'); 

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email:String,
    password:String
    

});

var userDB = mongoose.model('user' , userSchema  );

module.exports = userDB;