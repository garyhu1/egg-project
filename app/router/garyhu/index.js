module.exports = app => {
    const {router,controller} = app;

    router.get("/",controller.garyhu.garyhu);
    router.get("/hello",controller.garyhu.hello);
    router.get("/pet/list",controller.garyhu.getAllPets);
}