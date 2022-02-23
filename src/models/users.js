const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstName:
        {
            type:String,
            required:true,
            trim:true
        },
        lastName:
        {
            type:String,
            required:true,
            trim:true
        },
        emailId:
        {
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        contactNo:
        {
            type:String,
            required:true,
            trim:true
        },
        password:
        {
            type:String,
            required:true,
            trim:true
        },
        confirm_pwd:
        {
            type:String,
            required:true,
            trim:true
        }
    }
);

const usersDetail = new mongoose.model("userDetail",userSchema);

module.exports = usersDetail;