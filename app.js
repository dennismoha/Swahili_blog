var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet')
    // const mongoConnects = require('./util/database')
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


mongoose.connect(`mongodb+srv://admin:${process.env.mongoPassword}@admin.dzypr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(process.env.PORT, (err) => {
            if (err) {
                throw new Error('server connection error')
            }
            console.log('server started successfully')
        })
    })
    .catch(error => {
        throw error
    })