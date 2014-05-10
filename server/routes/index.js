var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.status(200);
  res.set('Content-type', 'application/json');
  res.send({'msg': 'Hello World!'});
});

module.exports = router;
