var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({
    explicitArray: false
});

var goodreadsService = function () {

    var books = {
        description: '',
        title: '',
        imageUrl: '',
        link: '',
        id: '',
        averageRating: ''
    }
    var getBookById = function (id, cb) {

        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '.xml?key=CjZtfIYbNl48b027TP9DQ'
        };

        var callback = function (response) {
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                parser.parseString(str, function (err, result) {
                    console.log(result.GoodreadsResponse.book);
                    cb(null, result.GoodreadsResponse.book);
                });
            });
        };

        http.request(options, callback).end();
    };

    var getBooksByUserId = function (id, cb) {
        var options = {
            host: 'www.goodreads.com',
            path: '/review/list/' + id + '.xml?key=CjZtfIYbNl48b027TP9DQ'
        };

        var callback = function (response) {
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                parser.parseString(str, function (err, result) {
                    cb(result.GoodreadsResponse.books)
                });
            });
        }
        http.request(options, callback).end();

    };

    return {
        getBookById: getBookById,
        getBooksByUserId: getBooksByUserId
    };
};

module.exports = goodreadsService;