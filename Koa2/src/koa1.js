var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger');

var indent = function (n){
    return Array(n).join('&nbsp');
}

var mid1 = function() {
    return function *(next){
        this.body = '<h3>请求 => 第一层中间件</h3>';
        yield next
        this.body += '<h3>响应 <= 第一层中间件</h3>'
    }
}

var mid2 = function() {
    return function *(next){
        this.body += '<h3>请求'+indent(4)+'=> 第二层中间件</h3>';
        yield next 
        this.body += '<h3>响应'+indent(4)+'<= 第二层中间件</h3>'
    }
}

var mid3 = function() {
    return function *(next){
        this.body += '<h3>请求'+indent(8)+'=> 第三层中间件</h3>'
        yield next
        this.body += '<h3>响应'+indent(8)+'<= 第三层中间件</h3>'
    }
}

app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())

app.use(function *(next){
    this.body +='<p style="color: #f60">'+indent(12)+'koa核心处理业务</p>'
})

app.listen(2222)