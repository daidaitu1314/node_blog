var express = require('express');
var router = express.Router();

var articleCtrl = require('../controller/articleCtrl.js');
router.get('/article/add', articleCtrl.showAddArticlePage)

module.exports = router;