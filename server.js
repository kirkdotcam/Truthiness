var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'public'))).listen(app.get(process.env.PORT));

