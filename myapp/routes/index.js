const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const dynamicContent = 'Hello, this is dynamic content!';
  res.render('index', { title: 'Express', dynamicContent: dynamicContent });
});

module.exports = router;
