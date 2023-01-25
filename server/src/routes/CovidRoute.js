const DbCovid = require('../controlers/covidControler')
    module.exports = {
        createCovid: (request, response) => {
            const {
                title, image, description
            } = request.body; 
        
            const CovidData = {
                title, image, description
            }
            const dataBase = DbCovid.getInstaceCovid();
            const result = dataBase.insertCovidData(CovidData);
        
            result
            .then(data => response.json({ data: data }))
            .catch(err => console.log(err));
        },
        
       getAllCovid: (request, response) => {
            const dataBase = DbCovid.getInstaceCovid();
            const result = dataBase.getAllCovid();
        
            result
            .then(data => response.json({Covid: data}))
            .catch( err => console.log(err.message))
        },

        getCovidByIdCovid: (request, response) => {
            const { id } = request.params;
            const dataBase = DbCovid.getInstaceCovid();
            const result = dataBase.getCovidById(id);
        
            result
            .then(data => response.json({Covid: data}))
            .catch( err => console.log(err.message))
        }
    } 