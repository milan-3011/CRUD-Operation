const express = require('express')
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const {UserData} =require("./Schema.js");

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Users")
.then(()=> console.log("db connected"))

app.get("/", (req, res)=>{
    UserData.find({})
    .then(user => res.json(user))
    .catch(e => console.log(e));
})
app.post('/Create', async (req, res) => {
    let {Name, Email, Age} = req.body
    await UserData.create({ Name, Email, Age });
    res.json("success")
})
  
app.get('/Update/:id', async (req, res) => {
    let {id} = req.params
    UserData.findById({_id:id})
    .then(user => res.json(user))
    .catch(e => console.log(e));
})

app.put('/Update/:id', async (req, res) => {
    let {id} = req.params
    let {Name, Email, Age} = req.body
    UserData.findByIdAndUpdate({_id:id},{Name, Email, Age} )
    .then(user => res.json(user))
    .catch(e => console.log(e));
});

app.delete("/:id", async (req, res)=>{
    let {id} = req.params
    UserData.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(e => console.log(e));
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})