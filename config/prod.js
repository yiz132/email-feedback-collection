// prod.js - production keys here!
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //mongoURI: 'mongodb+srv://jameszyx:rSGQZP54Bh5IeRph@emaily-myuzj.mongodb.net/test?retryWrites=true&w=majority',
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};