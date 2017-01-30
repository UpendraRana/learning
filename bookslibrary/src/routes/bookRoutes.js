var express = require('express');
var bookrouter = express.Router();


var router = function (navigation) {
    var bookService = require('../services/goodreadsService')();
    var bookController = require('../controllers/bookController')(bookService, navigation);
    
    bookrouter.use(bookController.middleWare);

    bookrouter.route('/')
        .get(bookController.getByIndex);

    bookrouter.route('/:id')
        .get(bookController.getById);

    return bookrouter;
}
module.exports = router;