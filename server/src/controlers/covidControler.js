let instance = null;
const connection = require('../dbService/dataBaseDrug')

class DbCovid {
    static getInstaceCovid () {
        return instance ? instance : new DbCovid();
    }

    async insertCovidData(CovidData) {
        try {
            const { title, image, description } = CovidData;
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO covid_table (title, image, description) VALUES (?,?,?);";

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

    async getAllCovid() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT id,title,image FROM covid_table";

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

    async getCovidById(id) {
        try{
            
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM covid_table WHERE id = ?";

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

module.exports = DbCovid;