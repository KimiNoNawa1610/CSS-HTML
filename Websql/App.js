var express=require('express');
var app=express();

app.get("/", function(req,res){
    res.send("Hello from our websql");
});

app.listen(8080,function(){
    console.log('App is listening on port 8080');
});