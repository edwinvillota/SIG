var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next){
  // Save user in session
  let name = req.body.user
  let password = req.body.password

  User.findOne({name: name, password: password})
    .exec(function(err,user){
      console.log(err)
      if(err || err !== null){
        res.send('Credenciales Incorrectas')
      } else {
        req.session.user = user._id
        res.redirect('../sig')
      }
    })
})

module.exports = router;
