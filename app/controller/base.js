const { Controller } = require('egg');

class BaseController extends Controller {
    getUser() {
        return this.ctx.session.user;
    }

    success(data,code) {
        this.ctx.body = {
            message: 'success',
            data
        }
        this.ctx.status = code
    }

    fail(err,code) {
        this.ctx.body = {
            message: 'fail',
            data: err
        }

        this.ctx.status = code
    }

    noFound() {
        this.ctx.redirect('/404.html')
    }
}

module.exports = BaseController;