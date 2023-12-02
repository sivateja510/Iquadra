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

server.post('/Logins',(req,res)=>{
    const data=db.get('Logins');
    data.insert({username:req.body.email,Name:req.body.username,Password:req.body.password,Mobile:req.body.mobile,Address:req.body.address,DOB:req.body.dob,imr:req.body.imr});
    // console.log(userData);
});

const Loginss=db.get('Logins');
server.post('/Loginss',(req,res)=>{
    const data=db.get('Logins');
    data.update({username:req.body.username},{$set:req.body}).then((resu)=>console.log(resu))
    
});

const Contacte=db.get('friends');
server.post('/Contacte',(req,res)=>{
    const data=db.get('friends');
    console.log(data);
    data.update({name:req.body.name},{$set:req.body}).then((resu)=>console.log(resu))
    
});


const Busines=db.get('business');
server.post('/Busines',(req,res)=>{
    const data=db.get('business');
    window.alert("updates")
    console.log(data);
    data.update({name:req.body.name},{$set:req.body}).then((resu)=>console.log(resu))
    
});

const College=db.get('colleague');
server.post('/College',(req,res)=>{
    const data=db.get('colleague');
    console.log(data);
    data.update({name:req.body.name},{$set:req.body}).then((resu)=>console.log(resu))
    
});

const Nebiours=db.get('neighbours');
server.post('/Nebiours',(req,res)=>{
    const data=db.get('neighbours');
    window.alert(req.body);
    console.log(data);
    data.update({name:req.body.name},{$set:req.body}).then((resu)=>console.log(resu))
    
});

const Offace=db.get('office');
server.post('/Offace',(req,res)=>{
    const data=db.get('office');
    console.log(data);
    data.update({name:req.body.name},{$set:req.body}).then((resu)=>console.log(resu))
    
});
const Relats=db.get('relatives');
server.post('/Relats',(req,res)=>{
    const data=db.get('relatives');
    console.log(data);
    data.update({name:req.body.name},{$set:req.body}).then((resu)=>console.log(resu))
    
});
  
server.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and server is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);