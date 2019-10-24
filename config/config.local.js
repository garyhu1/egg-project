'use strict'

module.exports = appInfo => {

    const config = exports = {};

    // 安全配置，关闭验证 CSRF 的值
    config.security = {
        csrf: {
            enable: false
        }
    };

    return {
        ...config
    }
}