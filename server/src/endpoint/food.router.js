const { checkToken } = require('../auth/auth')
const { getAllFoodHealth, getFoodHealthByid } = require('../routes/FoodRoute')    

module.exports = function(app){
    app.get('/food/list',getAllFoodHealth);
    app.get('/food/detail/:id', getFoodHealthByid);
}