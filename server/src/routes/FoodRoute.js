const DbFoodHealth = require('../controlers/foodControler')
module.exports = {        
        getAllFoodHealth:  (request, response) => {
            const dataBase = DbFoodHealth.getInstaceLingkungan();
            const result = dataBase.getAllFood();
        
            result
            .then(data => response.json({food: data}))
            .catch( err => console.log(err.message))
        },
        
        getFoodHealthByid: (request, response) => {
            const { id } = request.params;
            const dataBase = DbFoodHealth.getInstaceLingkungan();
            const result = dataBase.getFoodById(id)
        
            result
            .then(data => response.json({
                status: 'success',
                food: data}
                ))
            .catch( err => console.log(err.message))
        }
    } 