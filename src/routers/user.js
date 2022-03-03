const express = require("express");

const router = new express.Router();

const userRanking = require("../models/users.js");

const contactDetails = require("../models/contact.js");

const cartDetails = require("../models/cart.js");

router.get("/",(req,res)=>
{
    res.send("<h2 align='center'><br>Please click on this link to view the API: - <a href='/users'>Link</a></h2>");
});

router.post("/users",async(req,res)=>
{
    try
    {
        const addingUsersRecord = new userRanking(req.body);
        console.log("@ ",req.body);
        const insertUsers = await addingUsersRecord.save();
        res.status(201).send(insertUsers);
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get("/users/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        console.log(_id);
        const getUser = await userRanking.find(_id);
        console.log(getUser);
        res.send(getUser);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.get("/users",async(req,res)=>
{
    try
    {
        const getUsers = await userRanking.find().sort({"ranking":1});
        console.log(getUsers);
        res.send(getUsers);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.patch("/users/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        console.log("Update",_id);
        const getUser = await userRanking.findByIdAndUpdate(_id,req.body,{new:true});
        console.log(getUser);
        res.send(getUser);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.delete("/users/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        const getUser = await userRanking.findByIdAndDelete(_id);
        console.log(getUser);
        res.send(getUser);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});


router.post("/contacts",async(req,res)=>
{
    try
    {
        const addingcontactRecord = new contactDetails(req.body);
        console.log("Hello ",req.body);
        const insertcontact = await addingcontactRecord.save();
        res.status(201).send(insertcontact);
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get("/contacts/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        console.log(_id);
        const getcontact = await contactDetails.find(_id);
        console.log(getcontact);
        res.send(getcontact);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.get("/contacts",async(req,res)=>
{
    try
    {
        const getcontact = await contactDetails.find().sort({"ranking":1});
        console.log(getcontact);
        res.send(getcontact);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.patch("/contacts/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        console.log("Update",_id);
        const getcontact = await contactDetails.findByIdAndUpdate(_id,req.body,{new:true});
        console.log(getcontact);
        res.send(getcontact);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.delete("/contacts/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        const getcontact = await contactDetails.findByIdAndDelete(_id);
        console.log(getcontact);
        res.send(getcontact);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.post("/cart",async(req,res)=>
{
    try
    {
        const addingCartsRecord = new cartDetails(req.body);
        console.log("@ ",req.body);
        const insertCart = await addingCartsRecord.save();
        res.status(201).send(insertCart);
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get("/cart",async(req,res)=>
{
    try
    {
        const getcart = await cartDetails.find().sort({"ranking":1});
        console.log(getcart);
        //res.send(getcart);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.get("/cartallItemsByEmail",async(req,res)=>
{
    try
    {
        const emailId = req.query.emailId;
        const getcart = await cartDetails.find({emailId:emailId});
        console.log(getcart);
        res.send("Hello"+" "+emailId+" "+getcart);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.get("/cartanItem",async(req,res)=>
{
    try
    {
        const emailId = req.query.emailId;
        const prodId = req.query.prodId;
        const _id = req.query._id;
        const getcart = await cartDetails.findById(_id,{emailId:emailId,prodId:prodId});
        console.log(getcart);
        res.send("Hi"+" "+emailId+" "+getcart);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.patch("/cart",async(req,res)=>
{
    try
    {
        const emailId = req.query.emailId;
        const prodId = req.query.prodId;
        console.log("Update",emailId,prodId);
        const getcart = await cartDetails.findByIdAndUpdate(_id,req.body,{new:true});
        console.log(getcart);
        res.send(getcart);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.delete("/cart",async(req,res)=>
{
    try
    {
        const emailId = req.query.emailId;
        const prodId = req.query.prodId;
        const _id = req.query._id;
        const getcart = await cartDetails.findByIdAndDelete(_id,{emailId:emailId,prodId:prodId});
        // res.send("Hello"+_id+" "+emailId+" "+prodId);
        console.log(getcart);
        res.send(getcart);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.get("/contacts/*",(req,res)=>
{
    res.render("404_error",
    {
        errorMsg:"Oops 😖 !! Page not found ❌"
    });
});

router.get("/*",(req,res)=>
{
    res.render("404_error",
    {
        errorMsg:"Oops 😖 !! Page not found ❌"
    });
});

// router.get("/users/*",(req,res)=>
// {
//     res.render("404_error",
//     {
//         errorMsg:"Oops 😖 !! Page not found ❌"
//     });
// });

// router.get("/*",(req,res)=>
// {
//     res.render("404_error",
//     {
//         errorMsg:"Oops 😖 !! Page not found ❌"
//     });
// });

module.exports = router;