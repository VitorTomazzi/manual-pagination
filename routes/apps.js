// const express = require('express');
// const router = express.Router();

//********** scrapped this solution/ no longer applicable ************

// // const data = [
// //     {id: 1, name: 'my-app-001},
// //     {id: 2, name: 'my-app-002},
// //     {id: 3, name: 'my-app-003},
// //     {id: 4, name: 'my-app-004},
// //     {id: 5, name: 'my-app-005},
// //     {id: 6, name: 'my-app-006},
// //     {id: 7, name: 'my-app-007},
// //     {id: 8, name: 'my-app-008},
// //     {id: 9, name: 'my-app-009},
// //     {id: 10, name: 'my-app-010}
// // ];

// // instead of manually creating data, we loop and push into empty data array
// let data = [];
// for (let i = 1; i <= 300; i++) {
// 	data.push({
// 		id: Number(i),
// 		name: `my-app-${i}`
// 	});
// }

// // router logic to print the data onto our web app. this GET route prints every app
// // router.get('/', (req, res, next) => {
// // 	res.status(200).json('Backend Pagination');
// // });

// // this GET route lets us print each app by id
// router.get('/apps/:id', (req, res, next) => {

// 	// let found = data.find((item) => {
// 	// 	return item.id === parseInt(req.params.id);
// 	// });
// 	// if (found) {
// 	// 	res.status(200).json(found);
// 	// } else {
// 	// 	res.sendStatus(404);
// 	// }
// });
// module.exports = router;
