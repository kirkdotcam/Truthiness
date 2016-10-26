var express=require("express");
var app=express();


app.use(
    express.static(__dirname+'index.html')
    ).listen(process.env.PORT)