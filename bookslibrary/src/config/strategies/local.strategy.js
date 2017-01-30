var passport = require('passport'),
    LocalStartegy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;

module.exports = function () {
    passport.use(new LocalStartegy({
        userNameField: 'username',
        passwordField: 'password'
    }, function (userName, password, done) {
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('users');
            collection.findOne({
                userName: userName
            }, function (err, results) {
                if (results && results.password === password) {
                    var user = results;
                    done(null, user);
                } else {
                    done(null,false);
                }

            });

        });

    }));
};