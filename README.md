# UniKoaAdmin

一个基于 uniapp 和 koa.js 的中后台管理框架

## WEB

## SERVER

后端使用了 DDD 领域驱动的实现进行设计

### 0. 技术栈

- 后端使用的是基于 node.js 的 koa 框架
- 数据库使用 MySQL（版本 TBD）
- SQL 查询构造器使用 knex.js

### 1. 目录结构

```
src
├─admin/               # 后台管理核心模块
│  ├─application       # 应用服务层
│  ├─domain            # 领域层
│  ├─infrastructure    # 基础设施层
│  └─interface         # 接口层
├─common/              # 跨模块共享内容
├─config/              # 全局配置
├─app.js               # 应用入口文件
└─router.js            # 全局路由注册器
```

- **application**：应用服务层。
  这里放置与 admin 模块相关的应用服务，负责协调领域对象和基础设施来完成一个业务用例。例如：AdminAppService，它可能会调用多个领域服务或聚合根来执行操作。同时，这里也可以包含应用层的 DTO（数据传输对象）、命令（Commands）、查询（Queries）等。
- **domain**：领域层。
  包含 admin 模块的核心业务逻辑。这里应该有：
  - 实体（Entities）
  - 值对象（Value Objects）
  - 聚合根（Aggregate Roots）
  - 领域服务（Domain Services）
  - 领域事件（Domain Events）
  - 仓库接口（Repository Interfaces，定义在领域层，实现在基础设施层）
- **infrastructure**：基础设施层。
  为 admin 模块提供基础设施实现，例如：
  - 数据库访问实现（如 Repository 的具体实现）
  - 外部服务调用（如调用其他微服务或第三方 API）
  - 消息队列的生产者或消费者实现
  - 缓存实现等
- **interface**：接口层。
  负责处理外部请求（如 HTTP 请求）并返回响应。在 admin 模块中，这一层可能包含：
  - 控制器（Controllers）
  - 路由定义（Routes）
  - 中间件（Middleware，如权限验证、日志等）
  - DTO（用于接口层的数据传输对象）
  - 参数验证等
- **common**：这个目录用于存放整个项目通用的代码。例如：
  - 工具类（Utils）
  - 全局常量（Constants）
  - 全局枚举（Enums）
  - 通用异常（Exceptions）
  - 基础工具函数（如日期处理、字符串处理等）
  - 通用中间件（如错误处理中间件、日志中间件等，这些中间件可能被多个模块使用）
- **config**：存放项目的配置相关文件。例如：
  - 数据库配置
  - 应用配置（如端口号、环境变量等）
  - 第三方服务的配置（如邮件服务、短信服务等）
  - 不同环境的配置文件（如开发环境、测试环境、生产环境）
- **app.js**：这是整个应用的入口文件。它应该负责：
  - 初始化 Koa 应用
  - 加载配置
  - 注册中间件（如 body-parser、cors 等）
  - 将路由挂载到应用上（可能通过 router.js）
  - 启动服务器
- **router.js**：负责整个应用的路由整合。
  - 引入各个模块的路由
  - 将各个模块的路由挂载到特定的路径下（例如，将 admin 模块的路由挂载到'/admin'路径下）
  - 处理全局的路由（如健康检查路由）

### 2. 项目配置
