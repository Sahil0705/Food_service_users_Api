const express = require("express");
const UsersRanking = require("../src/models/users.js");
const router = require("../src/routers/user.js");
const app = express();

require("../src/db/conn.js");
const hbs = require('hbs');
app.set("view engine","hbs");

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(router);

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cors());

app.listen(port,()=>
{
    console.log(`Connection is live at port no ${port}`);
});