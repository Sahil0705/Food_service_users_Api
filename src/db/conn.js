const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/olympics").then(()=>
// {
//     console.log("Connection successful");
// }).catch((err)=>
// {
//     console.log("No Connection");
// });


mongoose.connect("mongodb+srv://Sahil:May07%40SD@cluster0.o7xi4.mongodb.net/first_db?retryWrites=true&w=majority").then(()=>
{
    console.log("Connection successful");
}).catch((err)=>
{
    console.log("No Connection",err);
});