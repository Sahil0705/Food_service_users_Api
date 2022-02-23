const express = require("express");

const router = new express.Router();

const userRanking = require("../models/users.js");

router.get("/",(req,res)=>
{
    res.send("<h2 align='center'><br>Please click on this link to view the API: - <a href='/users'>Link</a></h2>");
});

router.post("/users",async(req,res)=>
{
    try
    {
        const addingUsersRecord = new userRanking(req.body);
        console.log(req.body);
        const insertUsers = await addingUsersRecord.save();
        res.status(201).send(insertUsers);
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get("/users",async(req,res)=>
{
    try
    {
        const getUsers = await userRanking.find().sort({"ranking":1});
        res.send(getUsers);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.get("/users/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        const getUser = await userRanking.find(_id);
        console.log(getUser);
        res.send(getUser);
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

router.get("/users/*",(req,res)=>
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

module.exports = router;