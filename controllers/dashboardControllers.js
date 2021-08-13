const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');


//___________DASHBOARD_____________//
module.exports = {
showDashboard: (req, res) => {
    user_game.findAll().then((data) =>{
        console.log(data)
    res.render('dashboard', { data })
    });
},
}