//1.引入
var express = require('express');

//2.创建express框架的应用app
var app = express();

//3.定义匹配的路由 执行对应回调函数
app.get('/',function(req,res){
    res.send('hello,word  你好世界'); //res.send 自动设置响应头和编码格式
})

//4.启动服务
app.listen(3000,function(){
    console.log('启动中,请访问127.0.0.1:3000');
});