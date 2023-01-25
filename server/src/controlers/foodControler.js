let instance = null;
const connection = require('../dbService/dataBaseDrug')

class DbFoodHealth {
    static getInstaceLingkungan () {
        return instance ? instance : new DbFoodHealth();
    }

    async getAllFood() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT id,image,title,brief_description FROM food_table";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch(err) {
            console.log(err.message);
        }
    }

    async getFoodById(id) {
        try{
            
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM food_table WHERE id = ?";

                connection.query(query,[id],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch(err) {
            console.log(err.message);
        }
    }
}

module.exports = DbFoodHealth;