var express = require('express');
var router = express.Router();

router
  .get('/', (req, res) => { // 获取首页页面
    res.render('index');
  });

module.exports = router;