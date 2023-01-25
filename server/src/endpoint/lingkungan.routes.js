const { createLingkungan, getAllLingkungan, getIdLingkungan } = require('../routes/LingkunganRoutes')    

module.exports = function(app){
    app.post('/lingkungan/add', createLingkungan);
    app.get('/lingkungan/list', getAllLingkungan);
    app.get('/lingkungan/detail/:id', getIdLingkungan);
}
