const { createOlahraga, getAllOlahraga, getIdOlahraga } = require('../routes/OlahragaRoute')    

module.exports = function(app){
    app.post('/olahraga/add', createOlahraga);
    app.get('/olahraga/list', getAllOlahraga);
    app.get('/olahraga/detail/:id', getIdOlahraga);
}