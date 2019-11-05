# Manual Pagination

<div align=center>
    <h1 align=center>
        <br>
        Manual Pagination Challenge
        <br>
        <img width="100px" align=center src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="NodeJS logo">
    </h1>
</div>

## 📝 Table of Contents
- [About](#about)
- [Setup](#setup)
- [Endpoints](#endpoints)
- [Built Using](#built_using)
- [Authors](#authors)

## 📙 About <a name = "about"></a>

A single endpoint app built using the Express framework and the Node environment without the use of external libraries.

### Process
1. Set up Express and Node environment with server listening on port 3000
2. Installed necessary dependencies in package.json
3. Created dummy data using loops
4. Created endpoint, added manual pagination, and incorporated sorting functionality
5. Deployed to Heroku


### Queries and Pagination
Using queries added onto the "/apps" endpoint allows us to specify which page we would like to view while limiting the number of data entries printed per page. The query parameter (req.query) is used over the path parameter (req.param) as it is the best practice when sorting or filtering data. If no queries are specified in the URI, built-in default values keeps everything running smoothly. A check is also implemented to show the previous and next pages available and how many entries will be shown on those pages.


## ⚙️ Setup <a name = "setup"></a>

### Installation

*   Clone the [repo]('https://github.com/VitorTomazzi/manual-pagination/')
*   Install the server dependencies with: ```npm install``` or ```yarn install```
*   Run the local backend server using ```npm start``` or ```yarn start```
*   Open ```http://localhost:3000``` and start entering your test queries into the URI


## 📡 Endpoints <a name = "endpoints"></a>
### <span>**GET**</span> /apps

| Example Queries |
| --- |
| https://manual-pagination.herokuapp.com/apps |
| https://manual-pagination.herokuapp.com/apps?page=1 |
| https://manual-pagination.herokuapp.com/apps?page=2&limit=5 |
| https://manual-pagination.herokuapp.com/apps?page=1&sortBy=name&orderBy=desc |
| https://manual-pagination.herokuapp.com/apps?page=2&limit=3&sortBy=name&orderBy=desc |


| Query Parameters | Type | Default | Description |
|:--- | :--- | :--- | :--- |
| page | ```Number``` | ```1``` |Paginates to the requested page. |
| limit | ```Number``` | ```50``` |Limits number of entries per page. |
| sortBy | ```String``` | ```"id"``` | Only accepts "id" or "name". |
| orderBy | ```String``` | ```"asc"``` | Enter 'asc' for ascending order or 'desc' for descending order. |


## ⛏️ Built Using <a name = "built_using"></a>
- [JavaScript](https://www.javascript.com/) - Front End
- [Express.js](https://expressjs.com/) - Backend
- [Node.js](https://nodejs.org/) - Backend


# ✍️ Authors <a name = "authors"></a>
* [Vitor Tomazzi](https://github.com/VitorTomazzi)
