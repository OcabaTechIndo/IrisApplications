let instance = null;
const connection = require('../dbService/dataBaseDrug')

class DbLingkungan {
    static getInstaceLingkungan () {
        return instance ? instance : new DbLingkungan();
    }

    async insertLingkunganData(LingkunganData) {
        try {
            const { title, image, description } = LingkunganData;
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO lingkungan_table (title, image, description) VALUES (?,?,?);";

                connection.query(query, [title, image, description] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllLingkungan() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT id,image,title FROM lingkungan_table";

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

    async getLingkunganById(id) {
        try{
            
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM lingkungan_table WHERE id = ?";

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

module.exports = DbLingkungan;