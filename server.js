const express = require('express');
const app= express();
const port = process.env.PORT || 5000;

const routes = require('./api/routes');

routes(app);

app.listen(port,function() {
	console.log('Server strted on port:  ' + port);
});

// @Links for visit
// http://localhost:5000/distance/35004/36925
// http://localhost:5000/distance/99501/99950	
// http://localhost:5000/distance/85001/86556
// http://localhost:5000/about
// http://localhost:5000


// OTHER EXAMPLES 
// Arya	Mishra	99501 to 99950	
// Sheerisha siricilla	85001 to 86556

