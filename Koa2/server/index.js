const Koa = require('koa')
const app = new Koa()

app.use(async(ctx,next) => {
    ctx.body="Hi,Luck!"
})

app.listen(2333)