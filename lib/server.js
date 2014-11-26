module.exports = Server;

var http = require('http');

function Server(httpServer) {
	if(!(this instanceof Server)) return new Server;

	if(!httpServer) throw "httpServer is not setted";

	if(httpServer instanceof http.Server) {
		this.connectHttpServer(httpServer);
	} else if(httpServer === +httpServer) {
		if(httpServer < 0 || httpServer > 65535) throw "port is not in the range [0, 65535]";
		this.connectHttpServer(http.createServer());
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
			return res.end('socket.gg.js');
		} else {
			for(var i = 0; i < listeners.length; i++) listeners[i].call(null, req, res);
			return
		}
	});
}

Server.prototype.listen = Server;
