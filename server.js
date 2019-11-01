const http = require('http');
const express = require('express');
const appsRouter = require('./routes/apps');
const app = express();

app.use(express.json());

app.use('/apps', appsRouter);

app.use('/', function(req, res) {
	res.send('Hello World');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
