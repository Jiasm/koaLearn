var app = require('koa')(),
	onerror = require('koa-onerror');

app.use(function* () {
	throw new Error('demo error');
});

onerror(app);

app.listen(12306, () => console.log('run as on 12306'));