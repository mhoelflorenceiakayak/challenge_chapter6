const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');

module.exports = {
    showUserBiodata: (req, res) => {
    user_biodata.findAll().then((biodata) =>{
        console.log(biodata)
          res.render('biodata', { biodata })
        });
    },
}
