'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let val = ctx.app.cache;
    let user = ctx.session.user;
    console.log(user)
    const agent = ctx.get("user-agent");
    console.log(agent)
    ctx.body = 'hi, egg';
  }

  async setSession() {
    const { ctx } = this;
    ctx.session.user = {
      name: 'garyhu',
      password: '123456'
    }
    ctx.body = "set session";
  }

  async noFound() {
    const { ctx } = this;
    await ctx.render("404.html");
  }

  async login() {
    await this.ctx.render("login.html")
  }

  async signin() {
    const { ctx } = this;
    let data = ctx.request.body;
    console.log(data)
    ctx.body = data;
  }
}

module.exports = HomeController;
