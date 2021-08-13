
const express = require('express');
const app = express();

//Configuracion de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

let port = process.env.PORT || 5000;

// Settings
app.set('port', port);

// Middlewares
app.use(express.json());

// Routes
app.use(require('src/routes/products'));

app.listen(port, () =>{
    console.log('Server on port 5000')
});



