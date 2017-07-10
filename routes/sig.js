var express = require('express');
var router = express.Router();
var isLogged = require('../middlewares/isLogged')

router.use(isLogged)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./sig/home', { user: res.locals.user });
});

router.get('/requisitos',function(req, res, next){
  res.render('./sig/requisitos', {user: res.locals.user})
})

module.exports = router;
