module.exports = Server;

var http = require('http');

function Server(httpServer) {
	if(!httpServer) throw "httpServer is not setted";

	if(httpServer instanceof http.Server) {
		this.connectHttpServer(httpServer);
	} else if(httpServer === +httpServer) {
		this.connectHttpServer(http.createServer());
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
