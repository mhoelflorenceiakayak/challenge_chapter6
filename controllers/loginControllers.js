const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');

//_________LOG IN_____________//


const login =  (req, res) => {
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
         res.redirect(301, '/dashboard')};
    });
};

module.exports ={
    loginsimpan: (req, res) => {
    res.render('login');
},
    login
}