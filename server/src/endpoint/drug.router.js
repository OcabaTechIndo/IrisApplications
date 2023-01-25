const { checkToken } = require('../auth/auth')
const { createDrug, getAllDrug, gedDrugByid, } = require('../routes/DrugRoute')    

module.exports = function(app){
    app.post('/obat/add',createDrug);
    app.get('/obat/list', getAllDrug);
    app.get('/obat/detail/:id', gedDrugByid);
}