const router = require('express').Router();
const { SignUp, Login } = require('../controllers/UserAuthController');
const { userVerification } = require('../middlewares/AuthMiddlewares');

router.post("/signup", SignUp);
router.post("/login", Login)
router.post("/", userVerification);


module.exports = router;