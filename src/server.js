'use strict';

const express = require('express');
const app = express()

// require handler error function 
const notFoundError = require('./error-handlers/404.js')
const errorHandler = require('./error-handlers/500.js')

app.use(express.json());


// require routes 
const routerPage = require('./routes/food.js')
const foodRouter = routerPage.router

// Middleware function to check what route is used by user
app.use(routerPage.checkRoutes)

app.use('/food',foodRouter)
app.use('/clothes',foodRouter)

// middleware function 
app.use('*', notFoundError);
app.use(errorHandler);


function start(port) {
    app.listen(port, () => console.log(`listening to PORT ${port} ...`));
}


module.exports = {
    app,
    start
}

