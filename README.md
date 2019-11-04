# Manual Pagination

A single endpoint app built using Express and Node without the use of external libraries. 
First, I created dummy data using a for loop. Using queries added onto the "/apps" endpoint (?page= # & limit= #) allows us to specify which page we would like to view while limiting the number of data entries printed per page. The query parameter (req.query) is used over the path parameter (req.param) as it is the best practice when sorting or filtering data. If no page is specified, the default page is 1. If no limit is set, the app limits itself to 50 entries per page. A check is also implemented to show the previous and next pages available and how many entries will be shown.
