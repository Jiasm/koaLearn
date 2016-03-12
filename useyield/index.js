var koa = require('koa'),
	app = koa();

app.use(function* (next) {
	console.log('第一个中间件');
	yield next;
});

app.use(function* (next) {
	console.log('第二个中间件');
	yield next;
});

app.use(function* () {
	this.body = 'hello';
});

app.listen(12306, () => {
	console.log('run as 12306');
});