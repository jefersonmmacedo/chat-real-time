//Importando as configuracoes do servidor
const app = require('./config/server')

//Definindo a posta de conexao com o servidor
let server = app.listen(80, ( req, res) =>{
    console.log('Servidor Ativo!')
});

let io = require('socket.io').listen(server);

app.set('io', io);

//Crando conexao por websocket
io.on('connection', (socket) => {
    console.log(' Novo usuario conectado no chat');

    socket.on('disconnect', ()=> {
        console.log('Usuario desconectou do chat')
    });

    socket.on('msgServidor', (data) =>{
        socket.emit('msgCliente', {apelido: data.apelido, mensagem: data.mensagem});

        socket.broadcast.emit('msgCliente', {apelido: data.apelido, mensagem: data.mensagem});

    });
});