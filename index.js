const express = require('express'); //Nodejs on support common 
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 *60 * 60*1000,     //how long cookie can exist
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// express.watch for incoming HTTP requests. Watch for request trying to access '/'. Obj representing the incoming request. 
// Res: obj repre the out response. immediately send some json back to request
//console.developers.google.com

//env: environment varible. if there isnt a port visit 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
