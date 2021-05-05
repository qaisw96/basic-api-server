'use strict';

const express = require('express');
const router = express.Router();

// require classes from models page
const classModules = require('../models/food.js');

const foodInstance = new classModules.Food();
const clothesInstance = new classModules.Clothes();

let instance;

// Middleware function to check What route is used ==> 
// it will be exported & invoked in server as global middleware 
function checkRoutes(req, res, next) {
    console.log('from check function', req.path);
    if(req.path === '/food') {
        instance = foodInstance
    } else {
        instance = clothesInstance
    }
    next()
}

// RESTful APIs
router.get('/', getAllFoods)
router.get('/:id', getOneFood)
router.post('/',createFood);
router.put('/:id', updateFood)
router.delete('/:id', deleteFood); 

function getAllFoods(req, res) {
    let records = instance.get()
    res.status(200).json(records)
    
}

function getOneFood(req, res) {   
    let id = parseInt(req.params.id); // from the url its a string
    let oneItem = instance.get(id);
    res.status(200).json(oneItem);
 
}

function createFood(req, res) {  
    let obj = req.body;

    let createdObj = instance.create(obj);
    res.status(201).json(createdObj);
}

function updateFood(req, res) {
    console.log(req.body);
    let id = parseInt(req.params.id);
    const record = req.body;
    let updatedFood = instance.update(id, record);
    res.status(200).json(updatedFood);

}

function deleteFood(req, res) { 
    let id = parseInt(req.params.id);
    let deletedFood = instance.delete(id);
    let status = deletedFood ? 200 : 202

    res.status(status).json(deletedFood)
}


module.exports = {
    router,
    checkRoutes
}
