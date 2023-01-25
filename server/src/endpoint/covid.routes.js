const { createCovid, getAllCovid, getCovidByIdCovid } = require('../routes/CovidRoute')    

module.exports = function(app){
    app.post('/covid/add', createCovid);
    app.get('/covid/list', getAllCovid);
    app.get('/covid/detail/:id', getCovidByIdCovid)
}
