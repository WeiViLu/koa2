const session = require('koa-session');
const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()

const mid = async(ctx,next) => {
    ctx.body="Hi"
    await next()
    ctx.body=ctx.body+" There"
}

const mid1 = async(ctx,next) => {
    ctx.type="text/html"
    await next()
}

const mid2 = async(ctx,next) => {
    ctx.body=ctx.body+" Luck" 
    await next()
}

function tail(i){
    if(i>3) return
    console.log('修改前:',i);
    tail(i+1);
    console.log('修改后:',i);
}
tail(0);
app.use(logger())
app.use(session(app))
// app.use(mid);
// app.use(mid1);
// app.use(mid2);

app.keys=['Hi Luke']

app.use(ctx => {
    if(ctx.path === '/favicon.ico') return

    if(ctx.path === '/') {
        let n = ctx.session.views || 0
        ctx.session.views = ++n
        ctx.body = n+' 次'
    }else if(ctx.path === '/hi'){
        ctx.body="Hi Luck!"
    }else{
        ctx.body='404'
    }
})

app.listen(2222)