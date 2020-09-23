const usersCtrl = {};

const passport = require('passport');




const User = require('../models/user')

usersCtrl.rendersignupForm = (req, res) =>{
    res.render('users/signup');
}

usersCtrl.signup =async (req, res) =>{
    const errors = [];
   const {name, email, password, confirm_password} = req.body;
   if(password != confirm_password){
      errors.push({text: 'Las contraseñas no coinciden'});
   }
   if(password.length < 7){
    errors.push({text: 'Las contraseñas debe tener al menos 8 carácteres'});
   }
   if(errors.length>0){
       res.render('users/signup',{
           errors,
           name,
           email,
           password,
           confirm_password
       })
   }else{
   const emailUser =  await User.findOne({email: email});
   if(emailUser){
       req.flash('error_msg', 'Este email ya esta registrado en nuestra base de datos.');
       res.redirect('/users/signup');
   }else{
       const newUser = new User({name, email, password});
       newUser.password = await newUser.encryptPassword(password)
       await newUser.save();
       req.flash('success_msg', 'Registrado Correctamente');
       res.redirect('/users/signin');
   }
   }
}


usersCtrl.renderSigninForm = (req, res) =>{
    res.render('users/signin');
}


usersCtrl.signin = passport.authenticate('local',{
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
})

usersCtrl.logout = (req, res) =>{
    req.logout();
    req.flash('success_msg', 'Cierre de sesion correcto.');
    res.redirect('signin');
}



module.exports = usersCtrl;