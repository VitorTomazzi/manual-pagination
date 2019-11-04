# Manual Pagination

A single endpoint app built using Express.js and Node.js without the use of external libraries. 
First, I created dummy data using a loop so that if we need to increase the total data in the future we can. Using queries 
added onto the "/apps" endpoint (?page= <number> & limit= <number>) allows us to specify which page we would like to view while
limiting the number of data entries printed per page. A check is also implemented to show the pervious and next pages available
and how many entries are shown.
