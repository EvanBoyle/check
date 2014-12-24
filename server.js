var express = require('express'),
  http = require('http'),
  routes = require('./routes');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;



// Index Route
app.get('/', routes.index);

// Page Route
//app.get('/page/:page/:skip', routes.page);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

