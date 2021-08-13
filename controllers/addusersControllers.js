const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');



const createUserPost =  (req, res) => {
    user_biodata.create({
        fullname: req.body.fullname,
        country: req.body.country,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }).then(user_biodata => {
        user_game.create({
            user_game_id: user_biodata.id,
            username: req.body.username,
            country: req.body.country
        }).then(user_game => {
            console.log(req.body.match_schedule)});
             match_schedule.create({
             user_game_id: user_biodata.id,
             username: req.body.username,
             match_schedule: req.body.match_schedule
            }).then(match_schedule => {
                 console.log(match_schedule)
                res.redirect(301,'/user/biodata')
         });
        
    });
};

module.exports = {
    createUserForm: (req, res) => {
    res.render('addUsers');
    },
    createUserPost
};
