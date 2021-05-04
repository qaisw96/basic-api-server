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
    console.log(req);

    let createdObj = foodInstance.create(obj);
    res.status(201).json(createdObj);
  }

function updateFood(req, res) {
    let obj = req.body
    let updateFood = foodInstance.update(obj)
    res.status(200).json(updateFood);

}

function deleteFood(req, res) {    

}


module.exports = router
