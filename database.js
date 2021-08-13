const mysql = require('mysql');

//Establece la conexion a la base de datos
const mysqlConnection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test',
})

//Se conecta a la bd e indica en caso de algun error
mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

//Exporta los modulos de conexion a la bd
module.exports = mysqlConnection;