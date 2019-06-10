import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userID :String,
    firstName : String,
    lastName : String,
    email : String,
    username:String,
    role :String
}
export {IUserModel};