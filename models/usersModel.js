var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var user_schema = new Schema({
    login: String,
    password: String,
    fname: String,
    lname: String,
    email: String,
});

var users = mongoose.model("users",user_schema,"users");

module.exports.users = users;