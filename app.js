var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createtokenRouter=require('./routes/createtoken');
var generatesccodeRouter=require('./routes/generatesccode');
var metamaskRouter=require('./routes/metamask');
var connectRouter=require('./routes/connect');


var app = express();


var Web3 = require ('web3');
 
var ContractJSON =  require(path.join(__dirname,'build/contracts/token.json'))

web3 =  new Web3("http://localhost:7545");

accountAddress ="0xbFB1eC2D68aD52A1d65f7812a84977B906780c4A";

contractAddress = ContractJSON.networks['5777'].address;
console.log("contractAddress",contractAddress);
contract="0xbFB1eC2D68aD52A1d65f7812a84977B906780c4A";

const abi = ContractJSON.abi;

MyContract =  new web3.eth.Contract(abi,contractAddress);

console.log("new web3.eth.Contract(abi,contractAddress)",MyContract);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createtoken', createtokenRouter);
app.use('/generatesccode',generatesccodeRouter);
app.use('/metamask',metamaskRouter);
app.use('/connect',connectRouter);

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

module.exports = app;
