//Importando o express
const express = require('express');
//Importando o consign
const consign = require('consign')
//Importando o Body-Parser
const bodyParser = require('body-parser');
//Importando o Express Validator
const expressValidator = require('express-validator');

//Iniciando o Objeto App
const app = express();

//Configurando a View Engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configurando o Express-static
app.use(express.static('./app/public'));

//Configurando o Body-Parser
app.use(bodyParser.urlencoded({extended: true}));

// Configirando o express Validator
app.use(expressValidator());

//Configurando o Consign - Ele efetua o auto load das rotas, models e controllers
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);


//Expostando o objeto app
module.exports = app;
