var express=require('express');
var app=express();
var mysql = require('mysql');
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.engine('html', require('ejs').renderFile);
app.use(express.static(_dirname+"/public"));

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
        res.render("home", { data: count });
    })
});



app.listen(3128,function(){
    console.log('App is running on port 3128');
});

app.post('/register', function (req, res) {
    var person = { email: req.body.email };
    connection.query('INSERT INTO users SET ?', person, function (err, result) {
        console.log(err);
        console.log(result);
        res.redirect("/");
    });
});