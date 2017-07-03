module.exports = {
  showAddArticlePage(req, res) { // 展示添加文章页面
    // 如果没有登录，则跳转到登录页面
    if (!req.session.islogin) {
      res.redirect('/login');
    }
    // 如果已经登录了，则跳转到文章添加页面
    res.render('./article/add', {
      islogin: req.session.islogin,
      user: req.session.user
    });
  }
}