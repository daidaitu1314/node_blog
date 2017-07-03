var fs = require('fs');
var path = require('path');
// 导入解析Body数据的中间件
var bodyParser = require('body-parser');
// 导入 session 模块
var session = require('express-session');
// 导入 express 模块
var express = require('express');
// 创建 express 的服务器实例
var app = express();

// 托管静态资源文件
app.use('/node_modules', express.static('node_modules'));
// 设置模板引擎
app.set('view engine', 'ejs');
// 注册解析 body 数据的中间件
app.use(bodyParser.urlencoded({ extended: false }));
// 注册 session 中间件
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


// 1. 原始路由：
// app
// .get('/', (req, res)=>{
//   res.render('index');
// })
// .get('/register', (req, res)=>{
//   res.render('./user/register');
// })
// .get('/login', (req, res)=>{
//   res.render('./user/login');
// });

// 2. 将路由封装为单独的模块
// 注册首页路由
/*var indexRouter = require('./routers/indexRouter.js');
app.use(indexRouter);
// 注册用户路由
var userRouter = require('./routers/userRouter.js');
app.use(userRouter);*/

// 3. 循环注册路由
fs.readdir(path.join(__dirname, './routers'), (err, files) => {
  if (err) throw err;
  files.forEach(filename => {
    app.use(require(path.join(__dirname, './routers', filename)));
  });
});

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function () {
  console.log('Express server running at http://127.0.0.1:3001');
});