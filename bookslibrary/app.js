var express = require('express');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 5000;


var navigation = [{
        Link: '/Books',
        Text: 'Books'
    },
    {
        Link: '/Author',
        Text: 'Author'
    }
];

// passing variable to routes   
var bookRouter = require('./src/routes/bookRoutes')(navigation);
var adminRouter = require('./src/routes/adminRoutes')(navigation);
var authRouter = require('./src/routes/authRoutes')(navigation);



// this is to load static files
app.use(express.static('public'));


app.use(cookieParser());
app.use(session({
    secret: 'library',
    resave: true,
    saveUninitialized: true,
}));


require('./src/config/passport')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'hello',
        nav: [{
                Link: '/Books',
                Text: 'Books'
            },
            {
                Link: '/Author',
                Text: 'Author'
            }
        ]
    });
});

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);


app.listen(5000, function (err) {
    console.log('running server on ' + port);
});