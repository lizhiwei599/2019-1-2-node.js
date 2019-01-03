//正则匹配路由

//1.引入
let express = require('express');
//2.得到实例
let app = express();
//3.设置路由
app.get('/login',(req,res)=>{
    res.send('login');
})

// //正则来定义路由 get
// app.get(/^\/index\d{2}$/,function(req,res){
//     res.send('get恭喜发财');
// });

// //正则来定义路由 post
// app.post(/^\/index\d{2}$/,function(req,res){
//     res.send('post恭喜发财');
// });

//获取url中的参数
app.get('/index/:year/:month/:day',function(req,res){
    console.log(req.params);
    console.log("大名:",req.query.name);
    res.send('idnex');
});

//4.启动服务
app.listen(3000,function(){
    console.log('启动中');
})