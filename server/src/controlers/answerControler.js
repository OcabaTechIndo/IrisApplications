let instance = null;
const connection = require('../dbService/dataBaseDrug')

class DbAnswer {
    static getInstaceAnswer () {
        return instance ? instance : new DbAnswer();
    }

    async insertAnswerData(AnswerData) {
        try {
            const { name, description } = AnswerData;
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO answer_table (name, description) VALUES (?,?);";

                connection.query(query, [name, description] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllAnswer() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM answer_table";

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

    async putDataAnswer(AnswerData) {
        try{
            const { id, name, description } = AnswerData
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE answer_table SET name = ?, description = ? WHERE id = ?";

                connection.query(query,[name, description, id],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch(err) {
            console.log(err.message);
        }
    }



    async deleteAnswerData(answerId) {
        const response = await new Promise((resolve, reject) => {
            const query = "DELETE FROM answer_table WHERE id = ?";
            connection.query(query,[answerId],(err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })
        })
        return response
    }
}

module.exports = DbAnswer;