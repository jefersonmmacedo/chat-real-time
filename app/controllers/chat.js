const { emit } = require("../../config/server");

module.exports.iniciaChat = function(aplication, req, res){

    let dadosForm = req.body;

    req.assert('apelido', 'Digite seu nome ou apelido').notEmpty();
    req.assert('apelido', 'O nome ou apelido deve conter entre 2 e 15 letras').len(2,15);

    var erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao : erros});
        return
    }

    aplication.get('io').emit('msgCliente', {apelido: dadosForm.apelido, mensagem: 'Acabou de entrar.'})

    res.render("chat");
}