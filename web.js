var express = require('express')
, jade = require('jade')
, routes = require('./routes')
, http = require('http')
, path = require('path');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 4000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
})

app.get('/', routes.index);
app.get('/subscribe', routes.subscribe);
app.get('/api/:action', routes.api);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});