const express = require('express'); //Conexion a express
const router = express.Router(); //Enroutado para conexion a la bd

const mysqlConnection = require('./database'); //Conexion a la bd

router.get('/product/f/:product_name&:category', (req, res) => {
    const { product_name, category } = req.params;

    mysqlConnection.query(`SELECT * FROM product WHERE name LIKE ? AND category LIKE ?`, [`%${product_name}%`, Number(category)], (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

});

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

router.get('/product/', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/category/', (req, res) => {
    mysqlConnection.query('SELECT * FROM category', (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;