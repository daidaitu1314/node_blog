var express = require('express');
var router = express.Router();

var userCtrl = require('../controller/userCtrl.js');

router
  .get('/register', userCtrl.showRegisterPage) // 获取注册页面
  .get('/login', userCtrl.showLoginPage) // 获取登录页面
  .post('/register', userCtrl.registerNewUser) // 注册新用户
  .post('/login', userCtrl.login) // 用户登录
  .get('/logout', userCtrl.logout) // 退出登录

module.exports = router;