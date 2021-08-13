const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');

module.exports = { 
    scheduleshow: (req, res) => {
    match_schedule.findAll().then((match) =>{
        console.log(match)
    res.render('schedule', { match })
    });
},
}