const Koa = require('koa');
const Router = require('@koa/router'); // 新增路由

const app = new Koa();
const router = new Router(); // 创建路由器

// 添加路由
router.get('/', (ctx) => {
  ctx.body = 'Home Page';
});

router.get('/about', (ctx) => {
  ctx.body = 'About Page';
});

app.use(router.routes()); // 注册路由
app.use(router.allowedMethods()); // 支持OPTIONS请求

app.listen(3000, () => {
  console.log('Server started');
});
