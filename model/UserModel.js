var Sequelize = require('sequelize');
var Db = require('./baseDb.js');

var User = Db.define('blog_users', {
  id: { // 唯一主键Id
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    type: Sequelize.INTEGER
  },
  username: { // 用户名
    allowNull: false,
    type: Sequelize.STRING
  },
  password: { // 密码
    allowNull: false,
    type: Sequelize.STRING
  },
  nickname: { // 昵称
    allowNull: false,
    type: Sequelize.STRING
  }
});

module.exports = User;