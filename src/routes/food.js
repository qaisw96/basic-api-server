'use strict';

const express = require('express');
const router = express.Router();

// require class from module/food
const Food = require('../models/food.js')
const foodInstance = new Food();

// RESTful APIs
router.get('/food', getAllFoods)
router.get('/food/:id', getOneFood)
router.post('/food',createFood);
router.put('/food/:id', updateFood)
router.delete('/food/:id', deleteFood); 


function getAllFoods(req, res) {    
    let records = foodInstance.get()
    res.status(200).json(records)
    
}

function getOneFood(req, res) {   
    let id = parseInt(req.params.id); // from the url its a string
    let oneItem = foodInstance.get(id);
    res.status(200).json(oneItem);
 
}

function createFood(req, res) {  
    let obj = req.body;

    let createdObj = foodInstance.create(obj);
    res.status(201).json(createdObj);
  }

function updateFood(req, res) {
    console.log(req.body);
    let id = parseInt(req.params.id);
    const record = req.body;
    let updatedFood = foodInstance.update(id, record);
    res.status(200).json(updatedFood);

}

function deleteFood(req, res) {   
    let id = parseInt(req.params.id);
    let deletedFood = foodInstance.delete(id); 
    res.json(deletedFood)

}


module.exports = router;
