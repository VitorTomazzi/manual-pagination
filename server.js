const http = require('http');
const express = require('express');
const app = express();

// const data = [
//     {id: 1, name: 'my-app-001},
//     {id: 2, name: 'my-app-002},
//     {id: 3, name: 'my-app-003},
//     {id: 4, name: 'my-app-004},
//     {id: 5, name: 'my-app-005},
//     {id: 6, name: 'my-app-006},
//     {id: 7, name: 'my-app-007},
//     {id: 8, name: 'my-app-008},
//     {id: 9, name: 'my-app-009},
//     {id: 10, name: 'my-app-010}
// ];

//loop to create as much filler data as we want
let data = [];
for (let i = 1; i <= 300; i++) {
	data.push({
		id: Number(i),
		name: `my-app-${i}`
	});
}

//checks if connected
app.get('/', (req, res) => {
	res.status(200).send('Backend Pagination');
});

// this GET route lets us print each app that we want to query(?) using page= & limit=
app.get('/apps', (req, res) => {
	const page = parseInt(req.query.page); //parse int to make queries return as numbers and not strings
	const limit = parseInt(req.query.limit) || 50;

	//page * limit will give us which slice of the data we want to look at
	const startIndex = (page - 1) * limit; //page - 1 because we start a 0 index
	const endIndex = page * limit;

	const range = {};
	// if (req.params === null) {
	// 	range = { data };
	// } else {
	// 	range = {};
	// }

	//checks if surrounding pages exist
	if (endIndex < data.length) {
		range.next = {
			page: page + 1,
			limit: limit
		};
	}

	if (startIndex > 0) {
		range.previous = {
			page: page - 1,
			limit: limit
		};
	}

	range.range = data.slice(startIndex, endIndex);

	res.json(range);
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
