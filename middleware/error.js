var koa = require('koa'),
	app = koa();

app.use(function* () {
	throw new Error('demo error');
});

// 监听事件
app.on('error', (err, ctx) => {
	if (process.env.NODE_ENV !== 'test') {
		console.log(err.message);
		console.log(err);
	}
});

app.listen(12306, () => {
	console.log('run as 12306');
})