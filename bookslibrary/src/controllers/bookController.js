var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function (bookService, navigation) {

    var middleWare = function (req, res, next) {
        // if (!req.user) {
        //     res.redirect('/');
        // }
        next();
    };

    var getById = function (req, res) {
        // var id = new objectId(req.params.id);

        bookService.getBookById(req.params.id,
            function (err, book) {
                book = book;
                res.render('book', {
                    title: 'hello',
                    book: book,
                    nav: navigation
                });
            });
    }
    // var url = 'mongodb://localhost:27017/libraryApp';
    // mongodb.connect(url, function (err, db) {
    //     var collection = db.collection('books').findOne({
    //             id: id
    //         },
    //         function (err, results) {
    //             bookService.getBookById(results.bookId,
    //                 function (err, book) {
    //                     results.book = book;
    //                     res.render('book', {
    //                         title: 'hello',
    //                         book: results,
    //                         nav: navigation
    //                     });
    //                 });
    //         }
    //     );
    // });
    // };
    var getByIndex = function (req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books').find().toArray(
                function (err, results) {
                    res.render('books', {
                        title: 'hello',
                        books: results,
                        nav: navigation
                    });
                }
            );
        });
    };

    return {
        getById: getById,
        getByIndex: getByIndex,
        middleWare: middleWare
    };
};
module.exports = bookController;