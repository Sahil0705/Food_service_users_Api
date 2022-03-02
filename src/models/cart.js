const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
    {
        emailId:
        {
            type:String
        },
        prodId:
        {
            type:String
        },
        prodName:
        {
            type:String
        },
        price:
        {
            type:Number
        },
        quantity:
        {
            type:Number
        },
        vegNonveg:
        {
            type:String
        }
    }
);

const cartsDetail = new mongoose.model("cartDetail",cartSchema);

module.exports = cartsDetail;