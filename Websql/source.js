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

var select='Select* from users';

mysqlConnections.query(select, function (error,results,fileds) {
    if(error) throw error;
    console.log(results);
});

mysqlConnections.end;