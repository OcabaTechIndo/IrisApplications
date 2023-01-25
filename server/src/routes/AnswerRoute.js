const DbAnswer = require('../controlers/answerControler');
    module.exports = {
        createAnswer: (request, response) => {
            const {
                name, description
            } = request.body; 
        
            const AnswerData = {
                name, description
            }
            const dataBase = DbAnswer.getInstaceAnswer();
            const result = dataBase.insertAnswerData(AnswerData);
        
            result
            .then(data => response.json({ 
                status: 'success',
                Answer: data 
            }))
            .catch(err => console.log(err));
        },
        
       getAllAnswer: (request, response) => {
            const dataBase = DbAnswer.getInstaceAnswer();
            const result = dataBase.getAllAnswer();
        
            result
            .then(data => response.json({answer: data}))
            .catch( err => console.log(err.message))
        },

        editAnswer: (request, response) => {
            const {
                id, name, description
            } = request.body; 
            
            const AnswerData = {
                id, name, description
            }
            const dataBase = DbAnswer.getInstaceAnswer();
            const result = dataBase.putDataAnswer(AnswerData);
        
            result
            .then(data => response.json({ 
                status: 'success',
                Answer: data 
            }))
            .catch(err => console.log(err));
        },
        
        deleteAnswerById:  (request, response) => {
            const { id } = request.body;
            const dataBase = DbAnswer.getInstaceAnswer();
            const result = dataBase.deleteAnswerData(id);
        
            result
            .then(data => response.json({answer: data}))
            .catch( err => console.log(err.message))
        },
        
    } 