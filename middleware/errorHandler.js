const errorHandler = (error, req, res, next) =>{
    return res.stutas(400).send(error.message);
};

module.exports = errorHandler;