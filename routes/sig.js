var express = require('express');
var router = express.Router();
var isLogged = require('../middlewares/isLogged')

router.use(isLogged)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./sig/home', { id: req.session.user });
});

module.exports = router;
