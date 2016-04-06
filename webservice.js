var http = require('http');
var server = http.createServer(function(requeset,response){
	console.log('Knock knock');
	response.writeHead(200, {"Content-Type": "applicacion/json"});
	var data = {'message':'Hello!'};
	response.end(JSON.stringify(data) + '\n');
});

server.listen(8888);
console.log('I hate you.');



