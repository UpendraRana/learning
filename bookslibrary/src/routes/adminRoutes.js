var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{

        title: 'My first book',
        author: 'Rana Upendra'
    },
    {
        title: 'Indian History',
        author: 'Rana Upendra'
    }
];


var router = function (nav) {

    var addBooksToDb = function (books, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.remove({});
            collection.insertMany(books, function (err, books) {
                res.send(books);
                db.close();
            })
        })

    };

    var bookService = require('../services/goodreadsService')();
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            bookService.getBooksByUserId(22889226, function (books) {
                var booksToAdd = [];
                //res.send(books.book[0]);
                for (var i = 0; i < books.book.length; i++) {
                    var book = books.book[i];
                    book = {
                        id: book.id._,
                        title: book.title,
                        image_url: book.image_url
                    };
                    booksToAdd.push(book);
                }
                addBooksToDb(booksToAdd, res);
            });

        });

    return adminRouter;
};



// var router = function (nav) {
//     var bookService = require('../services/goodreadsService')();;
//     var url = 'mongodb://localhost:27017/libraryApp';
//     adminRouter.route('/addBooks')
//         .get(function (req, res) {
//             bookService.getBooksByUserId(22889226, function (books) {

//                 mongodb.connect(url, function (err, db) {
//                     var collection = db.collection('books');
//                     collection.insertMany(books, function (err, books) {
//                         console.log(books);
//                         res.send(books);
//                         db.close();
//                     })
//                 })
//             });
//         });

//     return adminRouter;
// };

module.exports = router;