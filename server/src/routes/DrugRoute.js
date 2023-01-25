// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended : false }));
const DbDrug = require('../controlers/drugControler')
module.exports = {
        createDrug : (request, response) => {
            const {
                summary, name_general, image_drug, indication, brand_name, background
            } = request.body; 
        
            const DrugData = {
                summary, name_general, image_drug, indication, brand_name, background
            }
            const dataBase = DbDrug.getInstaceDrug();
            const result = dataBase.insertDrugData(DrugData);
        
            result
            .then(data => response.json({ data: data }))
            .catch(err => console.log(err));
        },
        
        getAllDrug:  (request, response) => {
            const dataBase = DbDrug.getInstaceDrug();
            const result = dataBase.getAllDrug();
        
            result
            .then(data => response.json({obat: data}))
            .catch( err => console.log(err.message))
        },
        
        gedDrugByid: (request, response) => {
            const { id } = request.params;
            const dataBase = DbDrug.getInstaceDrug();
            const result = dataBase.getDrugById(id)
        
            result
            .then(data => response.json({
                status: 'success',
                data: data}
                ))
            .catch( err => console.log(err.message))
        }
    } 