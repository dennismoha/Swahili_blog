var express = require('express');
const Users = require('../controller/users')
var router = express.Router();

/* GET home page. */
router.get('/', Users.Singup)
module.exports = router;