var express=require("express");
var app=express();


app.get('/',function(req,res){
    express.static(__dirname+'/index.html')
    }).listen(process.env.PORT);