var faker=require('faker');
var mysql=require('mysql');

var mysqlConnections=mysql.createConnection({
    host:'localhoast',
    user:'Nhan',
    password:'1610',
    database:
})

function AddressGenerator(){
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}

AddressGenerator();