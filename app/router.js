'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  require("./router/garyhu")(app);

  router.get('/helloegg', controller.home.index);

  // 登录
  router.get("/login.html",controller.home.login);
  router.post("/user/login",controller.home.signin);
  router.get("/user/set",controller.home.setSession);

  router.get("/404.html", controller.home.noFound);

  // 测试外部服务器访问接口
  router.get("/show",controller.show.list)
};
