const http = require('http');
const port = 3001
http.createServer((req, res) => {
	res.writeHead(200, {'content-Type' : 'text/plain'})
	res.end('Hello World\n')
}).listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)

})