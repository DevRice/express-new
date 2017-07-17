const express = require('express');
const router = express.Router();

const title = 'Express';

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title, css: '/build/index.css', js: 'js/index.js' });
});

module.exports = router;
