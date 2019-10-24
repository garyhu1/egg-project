module.exports = app => {
    app.on("request", ctx => {
        ctx.starttime = Date.now();
    })

    app.on("response", ctx => {
        const time = Date.now() - ctx.starttime;
        // ctx.logger.debug("debug response time :: "+time)
        // console.log("console response time :: "+time);
        // console.log(app.cache)
    })
}