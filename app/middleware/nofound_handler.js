module.exports = () => {
    return async function nofoundHandler(ctx,next) {
        await next();
        if (ctx.status === 404 && !ctx.body) {
            if (ctx.acceptJSON) {
              ctx.body = { error: 'Not Found' };
            } else {
              ctx.redirect("/404.html");
            }
        }
    }
}