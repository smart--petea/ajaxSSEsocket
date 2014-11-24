var http = require('http');
var Server = require('../index');

var app = http.createServer(function(req, res) {
	res.end();	
});

app.listen(8000);

new Server(app);
