var app = require('koa')(),
    router = require('koa-router')();

app.use(router.routes())
    .use(router.allowedMethods());
console.log(app.param);
router.param('id', function*(id, next) {
    if (!id) return this.status = 404;
    console.log(`传过来的ID号为${id}`);
    this.id = `ID: ${id}`;
    yield next;
}).get('/userList/:id', function*(next) {
    this.body = this.id;
});

app.listen(12306, () => {
    console.log('run as 12306');
})
