var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.status(200);
    res.set('Content-type', 'application/json');
    res.send({
        'msg': 'Hello World!'
    });
});

module.exports = router;