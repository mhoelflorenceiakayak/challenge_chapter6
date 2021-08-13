const router = require("express").Router();
const addUsersControllers = require('../controllers/addUsersControllers');
const biodataControllers = require('../controllers/biodataControllers');
const dashboardControllers = require('../controllers/dashboardControllers');
const loginControllers = require('../controllers/loginControllers');
const { login } = require('../controllers/loginControllers');
const registerControllers = require('../controllers/registerControllers');
const matchControllers = require('../controllers/matchControllers');
const deleteUsersControllers = require('../controllers/deleteUsersControllers');

//_________________________________________//

router.get("/login", loginControllers.login);
router.post("/login", loginControllers.loginsimpan);
router.get("/dashboard", dashboardControllers.showDashboard);
router.post("/register/simpan", registerControllers.userRegister);
router.get("/user/biodata", biodataControllers.showUserBiodata);
router.get("/schedule", matchControllers.scheduleshow);
router.get("/user/add", addUsersControllers.createUserForm);
router.post("/user/simpan", addUsersControllers.createUserPost);
router.get("/user/delete/:id", deleteUsersControllers.deleteUser);

module.exports = router;
