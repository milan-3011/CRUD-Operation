const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchemaUser = new Schema({
    Name:String,
    Email:String,
    Age:Number
});

module.exports.UserData = mongoose.model("UserData", SchemaUser);