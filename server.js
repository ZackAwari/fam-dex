let http = require('http');

function onRequest(request, response) {
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.write("This is the Family Dex!");
    response.end();
}

http.createServer(onRequest).listen(3000);
