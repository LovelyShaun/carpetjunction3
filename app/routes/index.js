const express = require('express');
const router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  // // res.render('index', { title: 'Express' });
  // console.log('asd')
  // // res.sendFile(path.join(__dirname, ''));
  res.sendFile(path.join(__dirname, '..', '..', '/index.html'))
});


module.exports = router;
