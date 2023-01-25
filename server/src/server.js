const express = require('express');
const app = express();
// const DbDrug = require('./dbService/dataBaseDrug')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
require ('./endpoint/drug.router')(app)
require('./endpoint/user.router')(app)
require('./endpoint/article.router')(app)
require('./endpoint/answer.route')(app)
require('./endpoint/lingkungan.routes')(app)
require('./endpoint/covid.routes')(app)
require('./endpoint/food.router')(app)

app.listen(process.env.PORT, HOST, () => {
    console.log(`server running ${HOST} ${process.env.PORT}`);
})



