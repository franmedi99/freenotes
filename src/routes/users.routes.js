const {Router} = require('express');
const router = Router();
const {rendersignupForm, renderSigninForm, signup, signin, logout}  = require('../controllers/users.controller')


router.get('/users/signup', rendersignupForm);


router.post('/users/signup',signup);


router.get('/users/signin', renderSigninForm);


router.post('/users/signin',signin);


router.get('/users/logout', logout);



module.exports = router;