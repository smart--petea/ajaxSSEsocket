module.exports = Server;

var http = require('http');
var fs = require('fs');
var path = require('path');

var clientJS = fs.readFileSync(path.resolve("..", "ajaxSSEsocket-client", "index.js"));

function Server(httpServer) {
	if(!(this instanceof Server)) return new Server;

	if(!httpServer) throw "httpServer is not setted";

	if(httpServer instanceof http.Server) {
		this.connectHttpServer(httpServer);
	} else if(httpServer === +httpServer) {
		var port = httpServer;
		if(port < 0 || port > 65535) throw "port is not in the range [0, 65535]";

		httpServer = http.createServer();
		try {
			httpServer.listen(port);
		} catch (e) {
			throw e;
		}

		this.connectHttpServer(httpServer);
	} else {
		throw "first argument must be http.Server instance or of number type";
	}
}

Server.prototype.connectHttpServer = function(httpServer) {
	/*this piece of code I learnt from socket.io source code*/
	var listeners = httpServer.listeners('request');
	httpServer.removeAllListeners('request');

	httpServer.on('request', function(req, res) {
		if(req.url === '/socket.gg.js') {
			return res.end(clientJS);
		} else {
			for(var i = 0; i < listeners.length; i++) listeners[i].call(null, req, res);
			return;
		}
	});
}

Server.prototype.listen = Server;
