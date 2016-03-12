var koa = require('koa'),
	app = koa();

app.use(function* () {
	this.body = this.path;
});

app.listen(12306, () => {
	console.log('run as 12306');
});