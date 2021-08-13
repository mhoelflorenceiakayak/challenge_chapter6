const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');

//________________UPDATE___________________//
app.get('/user/update/:id', (req, res) => {
    const userId = req.params.id;

    user_biodata.findOne({
        where: {
            id: userId
        }
    }).then(user => {
        user_game.findOne({
            where: {
                user_game_id: userId
            }
        }).then(biodata => {
            res.render('update', { user, biodata })
        })
    })
})

app.post('/user/update/:id', (req, res) => {
    const userId = req.params.id;

    user_biodata.update({
        fullname: req.body.fullname,
        country: req.body.country,
        match_schedule: req.body.match_schedule,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    },{
        where: {
            id: userId
        }
    }).then(biodata => {
        user_game.update({
            username: req.body.username,
            country: req.body.country
        }, {
            where: {
                user_game_id: userId
            }
        }).then(biodata => {
            match_schedule.update({
                username: req.body.username,
                match_schedule: req.body.match_schedule
            }, {
                where: {
                    user_game_id: userId
                }
            }).then(biodata => {
                res.redirect(301, '/user/biodata')
            })
        })
    })
})

//_____________DELETE______________//
app.get('/user/delete/:id', (req, res) => {
    const userId = req.params.id;

    user_biodata.destroy({
        where: {
            user_game_id: userId
        }
    }).then(biodata => {
        user_game.destroy({
            where: {
                id: userId
            }
        }).then(user => {
            match_schedule.destroy({
                where: {
                    id: userId
                }
            }).then(biodata => {
                res.redirect(301, '/user/biodata');
            })
        })
    })
})