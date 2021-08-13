const { match_schedule } = require ('../models');
const { user_biodata } = require ('../models');
const { user_game } = require ('../models');


module.exports = {
    deleteUser: (req, res) => {
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
    }
    };