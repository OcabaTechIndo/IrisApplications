
let instance = null;
const connection = require('../dbService/dataBaseDrug')



class DbUser {
    static getInstaceUser () {
        return instance ? instance : new DbUser();
    }

    async createUser(user) {
        try{
            const { firstName, lastName, gender, email, password, number } = user;

            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO user_sehatyuks (firstName, lastName, gender, email, password, number) VALUES (?,?,?,?,?,?);"

                connection.query(query,[firstName, lastName, gender, email, password, number] ,(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response
        }catch(err){
            console.log(err)
        }
    }



    async getUserByEmail(userData) {
        try{
            const { email } = userData;
            const response = new Promise((resolve, reject) => {
                const query = "SELECT * FROM user_sehatyuks WHERE email = ?";
                connection.query(query, [email], (err, results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results[0]);
                });
            })
            return response
        }catch(err) {
            return err.message;
        }
    }


    async getUserById(idUser){
        try{
            const response = new Promise((resolve, reject) => {
                const query = "SELECT * FROM user_sehatyuks WHERE id = ?";
                connection.query(query, [idUser], (err, results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results[0]);
                });
            })
            return response
        }catch(err) {
            return err.message;
        }
    }

   async getAllUser() {
    try{
        const response = new Promise((resolve, reject) => {
            const query = "SELECT * FROM user_sehatyuks";
            connection.query(query, (err, results) => {
                if(err) reject(new Error(err.message));
                resolve(results);
            });
        })
        return response
    }catch(err) {
        console.log(err.message);
    }
   }


   async updateUsers(userData) {
    try{
        const { firstName, lastName, gender, email, password, number, id } = userData;
        const response = new Promise((resolve, reject) => {
            const query = "UPDATE user_sehatyuks SET firstName=?, lastName=?, gender=?, email=?, password=?, number=? WHERE id=?";
            connection.query(query,[firstName, lastName, gender, email, password, number, id], (err, results) => {
                if(err) reject(new Error(err.message));
                resolve(results[0]);
            });
        })

        return response;
    }catch(err){
        console.log(err);
    }
   }


   async deleteUserById(userId) {
        try{
            const response = new Promise((resolve, reject) => {
                const query = "DELETE FROM user_sehatyuks WHERE id = ?";
                connection.query(query,[userId], (err, results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results[0]);
                });
            })

            return response;
        }catch(err){
            console.log(err);
        }
   }
}

module.exports = DbUser;