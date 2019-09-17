const express = require('express'); //Nodejs on support common 
const app = express();

// express.watch for incoming HTTP requests. Watch for request trying to access '/'. Obj representing the incoming request. 
// Res: obj repre the out response. immediately send some json back to request
app.get('/', (req, res) => {
    res.send({hi: 'buddy'});
});

//env: environment varible. if there isnt a port visit 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
