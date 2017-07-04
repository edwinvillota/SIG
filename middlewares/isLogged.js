var express = require('express')
var mongoose = require('mongoose')
var User = require('../models/User')

var isLogged = function(req, res, next) {
  console.log(req.session.user)
  if(req.session.user != undefined && req.session.user != null){
    User.findOne({_id: req.session.user})
      .exec(function(err,user){
        if(err){
          console.log(err)
          res.redirect('/')
        }
        next()
      })
  } else {
    res.redirect('/')
  }
}

module.exports = isLogged
