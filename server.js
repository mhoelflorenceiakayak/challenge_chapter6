const express = require ('express');
const app= express();

const { match_schedule } = require ('./models');
const { user_biodata } = require ('./models');
const { user_game } = require ('./models');


const path = require('path')

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))

//_________LOG IN_____________//
app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    console.log(req.body)
    const userName = req.body.username;
    const password = req.body.password;

    user_biodata.findAll({
        where: {
            username: userName,
            password: password
        }
    }).then(data => {
        if(data.length === 0) {
         res.redirect(301,'/login')
        } else {
         res.redirect(301, '/dashboard')}
    })
})

//___________DASHBOARD_____________//
app.get('/dashboard', (req, res) => {
    user_game.findAll().then((data) =>{
        console.log(data)
    res.render('dashboard', { data })
    });
});

//__________USER BIODATA___________//
app.get('/user/biodata', (req, res) => {
    user_biodata.findAll().then((biodata) =>{
        console.log(biodata)
    res.render('biodata', { biodata })
    });
});

//__________MATCH SCHEDULE_________//
app.get('/match/schedule', (req, res) => {
    match_schedule.findAll().then((match) =>{
        console.log(match)
    res.render('schedule', { match })
    });
});


//_____________CREATE_____________//
app.get('/user/add', (req, res) => {
    res.render('addUsers');
})

app.post('/user/simpan', (req, res) => {
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
        
    })
})


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


//________RESTFUL API________//

//SELECT
app.get('/api/biodata', (req, res) => {
    user_biodata.findAll().then((data) =>{
        res.status(200).json(data)
    })
});

//CREATE
app.post('/api/add/user', (req, res) => {
        user_biodata.create({
            fullname: req.body.fullname,
            country: req.body.country,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }).then((data) => {
            res.status(200).json(data)
        })
});

//DELETE
app.delete('/api/delete/:id', (req, res) => {
     user_biodata.find(result => {
         biodata.id === parseInt(req.params.id)
        });
    if (!id) return res.status(404).send('users with specified ID not found');
    res.send(biodata);
    })

//UPDATE

app.put('/api/update/:id', (req, res) => {


    user_biodata.find(data => {
        where: {
            data.id === parseInt(req.params.id)
        }
    });
    if (!id) return res.status(404).send('users with specified ID not found');
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    data.name = req.body.name;
    res.send(data);
    });
    
app.listen(3000, () => console.log('apps berjalan di port 3000'));