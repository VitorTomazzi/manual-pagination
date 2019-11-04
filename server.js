const http = require('http');
const express = require('express');
const app = express();

// const data = [
// 	{ id: 1, name: 'ff-app-001' },
// 	{ id: 2, name: 'bb-app-002' },
// 	{ id: 3, name: 'qq-app-003' },
// 	{ id: 4, name: 'dd-app-004' },
// 	{ id: 5, name: 'ee-app-005' },
// 	{ id: 6, name: 'aa-app-006' },
// 	{ id: 7, name: 'my-app-007' },
// 	{ id: 8, name: 'my-app-008' },
// 	{ id: 9, name: 'zz-app-009' },
// 	{ id: 10, name: 'my-app-010' }
// ];

// loop to create as much filler data as we want
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
	const page = parseInt(req.query.page) || 1; //parse int to make queries return as numbers and not strings. default page is 1 if not specified
	const limit = parseInt(req.query.limit) || 50; //limits entries per page. default is 50 if not specified
	const sortBy = req.query.sortBy; //name or id
	const orderBy = req.query.orderBy; //asc or desc

	//page * limit will give us which slice of the data we want to look at
	const startIndex = (page - 1) * limit; //page - 1 because we start a 0 index
	const endIndex = page * limit;

	const results = {};

	//checks if surrounding pages exist
	if (endIndex < data.length) {
		results.next = {
			page: page + 1,
			limit: limit
		};
	}

	if (startIndex > 0) {
		results.previous = {
			page: page - 1,
			limit: limit
		};
	}

	// orderBy id or name and sortBy asc or desc
	// if (req.query.sortBy && req.query.orderBy) {
	// 	results[req.query.sortBy] = req.query.orderBy === 'desc' ? -1 : 1;
	// }

	// if sortBy is name and orderBy is asc then ...

	// if sortBy is id and orderBy is asc then ...

	// sort either asc or desc
	function order(data, orderBy) {
		return data.sort((a, b) => {
			return orderBy == 'asc' ? a.id - b.id : b.id - a.id;
		});
	}

	results.results = order(data.slice(startIndex, endIndex), orderBy);

	// console.log(results.results);

	res.json(results);
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
