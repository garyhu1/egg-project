'use strict'

const Controller = require('egg').Controller;

class IndexController extends Controller {

    async garyhu() {
        const {ctx} = this;
        await ctx.render("garyhu.html")
    }

    async hello() {
        const { ctx } = this;
        await ctx.render("hello.html")
    }

    async getAllPets() {
        const { ctx } = this;
        let res = await ctx.service.pet.getPets();
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: 'success',
            data: res
        }
    }
}

module.exports = IndexController;