const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');

//__________THE GAMES___________//
app.get('/thegame', (req, res) => {
    res.render('thegame');

})