const { createArticle, getAllArticle, getByIdArticle } = require('../routes/ArticleRoute')    

module.exports = function(app){
    app.post('/article/add', createArticle);
    app.get('/article/list', getAllArticle);
    app.get('/article/detail/:id', getByIdArticle)
}
