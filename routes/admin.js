var express = require('express');
const Users = require('../controller/users')
var router = express.Router();

/* GET home page. */
router.get('/', Users.Singup);
router.get('/index',(req,res)=>{
    res.render('admin/index')
})
module.exports = router;