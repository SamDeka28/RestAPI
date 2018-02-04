var express = require('express');

var path = require('path'),
	http=require("http");

var favicon = require('serve-favicon');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var request = require('request');
var http = require('http');

app.listen(3000);
