let instance = null;
const connection = require('../dbService/dataBaseDrug')

class DbArticle {
    static getInstaceArticle () {
        return instance ? instance : new DbArticle();
    }

    async insertArticleData(ArticleData) {
        try {
            const { title, image, description } = ArticleData;
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO article_table (title, image, description) VALUES (?,?,?);";

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

    async getAllArticle() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT id,image,title FROM article_table";

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

    async getArticleById(id) {
        try{
            
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM article_table WHERE id = ?";

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

module.exports = DbArticle;