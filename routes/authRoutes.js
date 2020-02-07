const passport = require('passport');

//arow function
module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile','email']
        })
    );
    //sec time
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req,res) => {
        req.logout();
        //res.send(req.user); 
        res.redirect('/');
    });

    app.get('/api/current_user', (req,res) => {
        // test change
        //res.send(req.session)
        res.send(req.user);
    });
}
