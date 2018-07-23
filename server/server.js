//console.log(__dirname+"../public");
const express=require('express');
const path=require('path');
const publicPath=path.join(__dirname,'../public');
var port=process.env.PORT|| 3000;

var app=express();
app.use(express.static(publicPath));
app.listen(port,()=>{
    console.log();
})
app.get('/',(req,res)=>{
    res.send("hello app is just in test mode");
})