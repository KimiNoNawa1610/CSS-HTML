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

mysqlConnections.connect(function (error) {
    if (!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
})