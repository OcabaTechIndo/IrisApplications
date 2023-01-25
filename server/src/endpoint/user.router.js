    const { checkToken } = require('../auth/auth')
    const { createDataUser, login, getUserById, getUsers, updateUser } = require('../routes/userRoute')    

    module.exports = function(app){
        app.post('/user/add',createDataUser);
        app.post('/user/login', login);
        app.get('/user/id/:id', checkToken, getUserById);
        app.get('/user/list', checkToken, getUsers);
        app.put('/user/set', checkToken, updateUser);
        app.delete('/user/delete')
    }