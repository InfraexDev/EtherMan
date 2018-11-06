var express = require('express');
var router = express.Router();
var worker = require('../workers');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:currency/balance', function (req, res, next) {
    res.send (worker.total(req.params['currency']));
});
router.get('/:currency/withdraw/:fund_id/:amount', function (req, res, next) {
    res.send (worker.withdraw(req.params));
});

module.exports = router;