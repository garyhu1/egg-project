/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568708064477_5365';

  // add your middleware config here
  config.middleware = [];

  // logger配置
  config.logger = {
    outputJSON: true,
    level: "DEBUG"
  } 

  // view 
  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  }

  // session 配置
  config.session = {
    key: "MY_EGG",// 代表了存储 Session 的 Cookie 键值对的 key 是什么
    maxAge: 24 * 3600 * 1000, // 一天
    httpOnly: true,
    encrypt: true
  };

  // 404统一处理
  config.nofound = {
    pageUrl: '/404.html'
  }

  // 中间件
  config.middleware = ['nofoundHandler']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
