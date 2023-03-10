# 功能列表

### 认证授权

提供了用户认证模块常用的功能，包括注册登陆、Google三方登陆，基于RBAC的授权。



### 即时聊天

基于`websocket`搭建的即时聊天demo, 访问  `host/health`



### 定时任务

支持Cron表达式、延时调用、间隔调用等，同时可以动态获取、添加和删除定时任务和延时调用任务。



### 上传下载

支持将单个文件或者批量文件上传到aws s3存储桶



### 健康检查

对http服务、内存、硬盘、数据库、Redis等进进状态检查，可以访问`host/chat`查看



### 文章CRUD

创建、修改、删除、查找等功能，对`prisma`的功能进行了演示



### 数据库

继承了PrismaClient，并重写了父类的构造方法，从环境变量中读取数据库配置，并添加了sql日志打印功能



### 消息队列

基于redis的消息队列，能够缓解高并发带来的不稳定性



### 用户管理

对用户的增删改查





### 目录结构

```
src
├── auth =======================================> 认证授权
│   ├── dto 
│   ├── guard
│   ├── interface
│   └── strategy
├── chat =======================================> 即时聊天
│   └── entities
├── common =====================================> 通用组件
│   ├── decorator
│   ├── entity
│   ├── filter
│   ├── interceptor
│   ├── middleware
│   ├── pipe
│   └── scalar
│   ├── constant
├── cron =======================================> 定时任务
├── file =======================================> 上传下载
│   └── dto
├── health =====================================> 健康检查
├── mail  ======================================> 邮件功能
├── order ======================================> 订单(订阅)
│   ├── dto
│   ├── entities
│   └── listeners
├── posts  =====================================> 文章(CRUD)
│   └── dto
├── prisma =====================================> 数据库
├── queue  =====================================> 消息队列
└── user   =====================================> 用户管理
```

