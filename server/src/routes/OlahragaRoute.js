const DbOlahraga= require('../controlers/olahragaControler')
    module.exports = {
        createOlahraga: (request, response) => {
            const {
                title, image, description
            } = request.body; 
        
            const OlahragaData = {
                title, image, description
            }
            const dataBase = DbOlahraga.getInstaceOlahraga();
            const result = dataBase.insertOlahragaData(OlahragaData);
        
            result
            .then(data => response.json({ data: data }))
            .catch(err => console.log(err));
        },
        
       getAllOlahraga: (request, response) => {
            const dataBase = DbOlahraga.getInstaceOlahraga();
            const result = dataBase.getAllOlahraga();
        
            result
            .then(data => response.json({Olahraga: data}))
            .catch( err => console.log(err.message))
        },

        getIdOlahraga: (request, response) => {
            const { id } = request;
            const dataBase = DbOlahraga.getInstaceOlahraga();
            const result = dataBase.getOlahragaById(id);

            result
            .then(data => response.json({ Olahraga: data}))
            .catch( err => console.log(err));
        }
    } 