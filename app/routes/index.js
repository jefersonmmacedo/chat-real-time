module.exports = function(aplication){
    aplication.get('/', (req, res) => {
        aplication.app.controllers.index.index(aplication, req, res)
    });
};