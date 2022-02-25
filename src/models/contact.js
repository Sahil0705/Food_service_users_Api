const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        fullname:
        {
            type:String,
            required:true,
            trim:true
        },
        phone:
        {
            type:String,
            trim:true
        },
        email:
        {
            type:String,
            required:true,
            trim:true
        },
        msg:
        {
            type:String,
            required:true,
            trim:true
        }
    }
);

const contactsDetail = new mongoose.model("contactDetail",contactSchema);

module.exports = contactsDetail;