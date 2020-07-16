var faker=require('faker');
var mysql=require('mysql');

var mysqlConnections=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'websql'
});

function AddressGenerator(){
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}
/*Test Connection*/
mysqlConnections.connect(function(error){
    if(!!error){
        console.log('error');
    }
    else{
        console.log('Connected');
    }
})
/* Number of Users*/
var select ='Select count(*) as total from users ';

/*mysqlConnections.query(select, function (error,results,fileds) {
    if(error) throw error;
    console.log(results[0].total);
});*/

/*Insert Data*/

var insert="insert into users(email) values('Nhan@gmail.com');" 
/*mysqlConnections.query(insert, function (error,results,fileds) {
    if(error) throw error;
    console.log(results[0].total);
}); */

/*var person={email:faker.internet.email()};*/
var people=[];
for(var i=0;i<500;i++){
    people.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
var q='insert into users (email, created_at) values ?';
//console.log(people);
mysqlConnections.query(q,[people], function(error,result){
    if(error) throw error;
    console.log(result);
})
mysqlConnections.end;