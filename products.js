const express = require('express'); //Conexion a express
const router = express.Router(); //Enroutado para conexion a la bd

const mysqlConnection = require('./database'); //Conexion a la bd


//Se crea la ruta get la cual recibira parametro "product_name" para filtrar
router.get('/product/p/:product_name', (req, res) => {
    const { product_name } = req.params;

    mysqlConnection.query(`SELECT * FROM product WHERE name LIKE ?`, [`%${product_name}%`], (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

});

//Se crea la ruta get la cual recibira parametro "category" para filtrar 
router.get('/product/c/:category', (req, res) => {
    const { category } = req.params;

    mysqlConnection.query(`SELECT * FROM product WHERE category LIKE ?`, [Number(category)], (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

});

//Se crea la ruta get la cual respondera enviando los productos disponibles
router.get('/product/', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Se crea ruta get la cual respondera enviando las categorías disponibles
router.get('/category/', (req, res) => {
    mysqlConnection.query('SELECT * FROM category', (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Exporta los modulos de las rutas creadas
module.exports = router;