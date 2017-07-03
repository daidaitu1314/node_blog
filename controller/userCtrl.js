var UserModel = require('../model/UserModel.js');

module.exports = {
  showRegisterPage(req, res) { // 展示注册页面
    res.render('./user/register');
  },
  showLoginPage(req, res) { // 展示登录页面
    res.render('./user/login');
  },
  registerNewUser(req, res) { // 注册新用户
    var newUser = req.body;
    UserModel.sync()
      .then(() => {
        return UserModel.count({
          where: {
            username: newUser.username
          }
        });
      })
      .then((results) => {
        if (results === 0) {// 可以注册
          return UserModel.create(newUser);
        } else {
          return false;
        }
      })
      .then((results) => {
        if (results) {
          res.json({
            err_code: 0
          });
        } else {
          res.json({
            err_code: 1,
            msg: '改用户名已被注册，请注册其他用户名！'
          });
        }
      })
      .catch((err) => {
        res.json({
          err_code: 500,
          msg: err.message
        });
      });
  },
  login(req, res) { // 用户登录
    var loginUser = req.body;
    UserModel.sync()
      .then(() => {
        return UserModel.findOne({
          where: {
            username: loginUser.username,
            password: loginUser.password
          }
        });
      })
      .then((results) => {
        if (results === null) {
          res.json({
            err_code: 1,
            msg: '用户名或密码失败，稍后再试！'
          });
        } else {
          res.json({
            err_code: 0
          });
        }
      });
  }
}