//1.引入express框架
var express = require('express');

//2.得到框架express的实例app
var app = express();

//3.定义匹配的路由 处理对应的逻辑
app.get('/',function(req,res){
    res.send('index');
});
//3.1 匹配/login路由  匹配pathname 等于/login路由
app.get('/login',function(req,res){
    res.send('login');
});
//3.2 匹配/register
app.get('/register',function(req,res){
    res.send('register');
});

//4.启动服务
app.listen(3000,function(){
    console.log('启动中')
});

