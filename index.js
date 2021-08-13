
const express = require('express'); 
const app = express();

//Configuracion de CORS para dar acceso a los request
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Puerto al cual se conectará al estar alojado en heroku 
let port = process.env.PORT || 5000;

// Se establece el puerto en los settings
app.set('port', port);

// Middlewares para formato json
app.use(express.json());

// Acceso a las rutas
app.use(require('./products'));

// Llama al puerto
app.listen(port, () =>{
    console.log('Server on port 5000')
});



