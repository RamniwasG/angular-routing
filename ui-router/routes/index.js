var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/*router.get('/success', function(req, res) {
  res.render('success.html');
});
*/
module.exports = router;