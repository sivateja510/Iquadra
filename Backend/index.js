const express = require('express');
const cors=require('cors');
const monk=require('monk');
const server = express();
const PORT = 8090;
server.use(cors());
server.use(express.json());
const urll=('mongodb+srv://sivateja:sivateja@facultydairy.wqm3eo7.mongodb.net/iquadra');
// const urll=('mongodb://localhost:27017/demo')
const db=monk(urll);

db.then(()=>{
    console.log("db connected");
})
server.get('/',(req,res)=>{
    res.status(200);
    res.send(" server is running ");
});

const Login=db.get('Logins');
server.get('/Logins',(req,res)=>
{
    Login.find({}).then((docs)=>
    {
        res.json(docs);
    });
})
const Friend=db.get('friends');
server.get('/friends',(req,res)=>
{
    Friend.find({}).then((docs)=>
    {
        res.json(docs);
    });
})
const Office=db.get('office');
server.get('/office',(req,res)=>
{
    Office.find({}).then((docs)=>
    {
        res.json(docs);
    });
})

const Relatives=db.get('relatives');
server.get('/relatives',(req,res)=>
{
    Relatives.find({}).then((docs)=>
    {
        res.json(docs);
    });
})
const Neighbours=db.get('neighbours');
server.get('/neighbours',(req,res)=>
{
    Neighbours.find({}).then((docs)=>{
        res.json(docs);
    });
})

const Business=db.get('business');
server.get('/business',(req,res)=>
{
    Business.find({}).then((docs)=>{
        res.json(docs);
    });
})

server.post('/entry',(req,res)=>{
    const data=db.get('ques')
    // console.log(req.body.username);
    data.insert({username:req.body.username,Email:req.body.email,Password:req.body.password});
    // console.log(userData);
})
  
server.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and server is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);