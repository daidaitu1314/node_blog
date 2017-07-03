module.exports = {
  showIndexPage(req, res) { // 展示首页页面
    res.render('index', {
      islogin: req.session.islogin,
      user: req.session.user
    });
  }
}