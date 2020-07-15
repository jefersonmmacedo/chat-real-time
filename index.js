const app = require('./config/server')

let server = app.listen(80, ( req, res) =>{
    console.log('Servidor Ativo!')
});

require('socket.io').listen(server);