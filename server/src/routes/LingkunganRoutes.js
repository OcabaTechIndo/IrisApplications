const DbLingkungan = require('../controlers/lingkunganContoler')
    module.exports = {
        createLingkungan: (request, response) => {
            const {
                title, image, description
            } = request.body; 
        
            const LingkunganData = {
                title, image, description
            }
            const dataBase = DbLingkungan.getInstaceLingkungan();
            const result = dataBase.insertLingkunganData(LingkunganData);
        
            result
            .then(data => response.json({ data: data }))
            .catch(err => console.log(err));
        },
        
       getAllLingkungan: (request, response) => {
            const dataBase = DbLingkungan.getInstaceLingkungan();
            const result = dataBase.getAllLingkungan();
        
            result
            .then(data => response.json({Lingkungan: data}))
            .catch( err => console.log(err.message))
        },

        getIdLingkungan: (request, response) => {
            const { id } = request.params;
            const dataBase = DbLingkungan.getInstaceLingkungan();
            const result = dataBase.getLingkunganById(id);

            result
            .then(data => response.json({ Lingkungan: data}))
            .catch( err => console.log(err));
        }
    } 