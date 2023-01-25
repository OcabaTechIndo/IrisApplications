let instance = null;
const connection = require('../dbService/dataBaseDrug')

class DbOlahraga {
    static getInstaceOlahraga () {
        return instance ? instance : new DbOlahraga();
    }

    async insertOlahragaData(OlahragaData) {
        try {
            const { title, image, description } = OlahragaData;
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO olahraga_table (title, image, description) VALUES (?,?,?);";

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

    async getAllOlahraga() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT id,title FROM olahraga_table";

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

    async getOlahragaById(id) {
        try{
            
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM olahraga_table WHERE id = ?";

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

module.exports = DbOlahraga;