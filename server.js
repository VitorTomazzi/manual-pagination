const http = require('http');
const express = require('express');
const app = express();

//this dummy data is better for testing
const data = [
	{ id: 1, name: 'ff-app-001' },
	{ id: 2, name: 'bb-app-002' },
	{ id: 3, name: 'qq-app-003' },
	{ id: 4, name: 'dd-app-004' },
	{ id: 5, name: 'ee-app-005' },
	{ id: 6, name: 'aa-app-006' },
	{ id: 7, name: 'my-app-007' },
	{ id: 8, name: 'ay-app-008' },
	{ id: 9, name: 'zz-app-009' },
	{ id: 10, name: 'my-app-010' },
	{ id: 11, name: 'ff-app-001' },
	{ id: 12, name: 'zb-app-002' },
	{ id: 13, name: 'qr-app-003' },
	{ id: 14, name: 'sd-app-004' },
	{ id: 15, name: 'ee-app-005' },
	{ id: 16, name: 'rr-app-006' },
	{ id: 17, name: 'uy-app-007' },
	{ id: 18, name: 'uu-app-008' },
	{ id: 19, name: 'lo-app-009' },
	{ id: 20, name: 'my-app-010' }
];

// can also use a loop to create a larger volume of filler data
// let data = [];
// for (let i = 1; i <= 300; i++) {
// 	data.push({
// 		id: Number(i),
// 		name: `my-app-${i}`
// 	});
// }

//checks if connected
app.get('/', (req, res) => {
	res.status(200).send('Backend Pagination');
});

// this GET route lets us print each app that we want to query
app.get('/apps', (req, res) => {
	const page = parseInt(req.query.page) || 1; //default page is 1 if not specified
	const limit = parseInt(req.query.limit) || 50; //limits entries per page. default is 50 if not specified
	const sortBy = req.query.sortBy || 'id'; //sort by name or id. defaults to sorting by id
	const orderBy = req.query.orderBy || 'asc'; //order by asc or desc. defaults ascending

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

	// logic for sorting either asc or desc && by name or id when query is specified
	function order(data, sortBy, orderBy) {
		if (sortBy === 'id') {
			return data.sort((a, b) => {
				return orderBy == 'asc' ? a.id - b.id : b.id - a.id;
			});
		} else if (sortBy === 'name') {
			return orderBy == 'asc'
				? data.sort((a, b) => {
						// console.log(a, b);
						//used regex for practice. alternatively can use String.localCompare method
						//i.e. needed to correctly order 'my-app-10' > 'my-app-2'
						//usage depends on the data set being used
						if (a.name.match(/[^0-9]+/gi)[0] === b.name.match(/[^0-9]+/gi)[0]) {
							return a.name.match(/[0-9]+/)[0] - b.name.match(/[0-9]+/)[0];
						}
						return a.name > b.name ? 1 : -1;
					})
				: data.sort((a, b) => {
						if (a.name.match(/[^0-9]+/gi)[0] === b.name.match(/[^0-9]+/gi)[0]) {
							return b.name.match(/[0-9]+/)[0] - a.name.match(/[0-9]+/)[0];
						}
						return a.name < b.name ? 1 : -1;
					});
		} else {
			return data;
		}
	}

	// if we paginate, sort, or order we will be passing those queries here into the order function
	results.results = order(data.slice(startIndex, endIndex), sortBy, orderBy);

	//print on screen
	res.json(results);
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
