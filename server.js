var express = require('express'),
  http = require('http'),
  exphbs = require('express-handlebars'),
  routes = require('./routes');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

app.engine('handlebars', exphbs({ defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

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

