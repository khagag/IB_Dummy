var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send('<Ack xmlns=" http://www.egyptianbanks.com/ipn/schema/" api="PayResp" msgId="41d5fc5c-9b5f-4e1f-b444-df0124f0b765" ts="2019-12-31 13:12:12.123" result="SUCCESS" respCode="00000" respDesc="SUCCESS"/>');
});

module.exports = router;
