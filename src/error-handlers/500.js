'use strict';

function errorHandler(err, req, res, next) {
    res.status(500).json({
        err: err,
        message: `server error : ${err.message}`,
        path: req.path,
        query: req.query
    });
};

module.exports = errorHandler;