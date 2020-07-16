var express=require('express');
var app=express();
var mysql = require('mysql');

app.set("view engine","ejs");

var mysqlConnections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'websql'
});

app.get("/", function(req,res){
    var q='Selection count(*) as count from users';
    mysqlConnections.query(q, function(error,results){
        if(error)throw error;
        var count=results[0].cont;
        res.render("home",{data:count});
    })
});



app.listen(3128,function(){
    console.log('App is running on port 8080');
});