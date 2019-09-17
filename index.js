const express = require('express'); //Nodejs on support common 
const app = express();

// express.watch for incoming HTTP requests. Watch for request trying to access '/'. Obj representing the incoming request. 
// Res: obj repre the out response. immediately send some json back to request
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(5000);