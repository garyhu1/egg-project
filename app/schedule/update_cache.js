// 用来定时清缓存（定时任务）

const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {

    static get schedule() {
        return {
            interval: '1m',     // 时间间隔1分钟
            type: 'all',        // 指定所有worker都需要执行
            immediate: true,    // 应用启动后会立刻执行一次
        }
    }

    async subscribe() {
        let res = await this.ctx.service.pet.getPets();
        this.ctx.app.cache = res;
    }

}

module.exports = UpdateCache;