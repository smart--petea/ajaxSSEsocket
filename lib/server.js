module.exports = Server;

var http = require('http');

function Server(httpServer) {

	if(httpServer instanceof http.Server) this.connectHttpServer(httpServer);
}

Server.prototype.connectHttpServer = function(httpServer) {
	/*this piece of code I learnt from socket.io source code*/
	var listeners = httpServer.listeners('request');
	httpServer.removeAllListeners('request');

	httpServer.on('request', function(req, res) {
		res.end('suntem aici');
	});
}
