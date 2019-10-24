const BaseController = require("./base");

class ShowController extends BaseController {
    async list() {
        const { ctx } = this;
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: 'success',
            data: {
                name: 'garyhu',
                gender: 'male',
                create_time: '2019.10.24'
            }
        }
    }
}

module.exports = ShowController;