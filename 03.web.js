//引入express框架
var express = require('express');
//引入fs加载文件
var fs = require('fs');
//引入路径
var path = require('path');

//2.得到框架express的实例app
var app = express();

//3.定义匹配的路由 处理对应的逻辑
app.get('/',function(req,res){
    //之前的做法 1.先读取文件index.html内容 2.把内容给res.end响应出去
    fs.readFile(path.join(__dirname,'view/index.html'),'utf8',function(err,data){
        if(err){
            //抛出异常
            throw err;
        }
        res.end(data);
    })

});

//重定向index
app.get('/index',function(req,res){
    res.redirect('/');
});

//3.1 匹配/login路由  匹配pathname 等于/login路由
app.get('/login',function(req,res){
    res.sendFile( path.join(__dirname,'view/login.html') );
});
//3.2 匹配/register
app.get('/register',function(req,res){
    res.sendFile( path.join(__dirname,'view/register.html') );
});

//4.启动服务
app.listen(3000,function(){
    console.log('启动中')
});

