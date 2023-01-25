const { createAnswer, getAllAnswer, editAnswer, deleteAnswerById } = require('../routes/AnswerRoute');


module.exports = function(app){
    app.post('/answer/add', createAnswer);
    app.get('/answer/list', getAllAnswer);
    app.put('/answer/edit', editAnswer);
    app.delete('/answer/delete', deleteAnswerById)
}