const Service = require('egg').Service;

class PetService extends Service {

    async getPets() {
        const { ctx } = this;

        let res = await ctx.curl("http://localhost:4005/api/v1/pet/list",{dataType: 'json'})

        return res.data.data;
    }
}

module.exports = PetService;