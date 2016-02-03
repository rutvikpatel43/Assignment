var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    
    // create an user list
    var userlist = ['Me', 'you','then'];
  //load a users view instead
  res.render('users', {userlist: userlist});
});

module.exports = router;
