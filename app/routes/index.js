// app/routes/index.js
//'use strict';
var path = require('path');
var users = require('../../models/usersModel').users;
var session_middleware = require("../middlewares/session");
var cookieSession =  require("cookie-session");
var router_app = require("./router_app");

module.exports = function(app) {
    
    app.use(cookieSession({
        name:"login",
        keys:["key-1","key-2"]
    }));
    
    
  app.get('/', function(req, res) {
    res.sendFile(path.resolve('public/views/index.html'));
  });
    
    //login
 app.post('/login',function(req,res){
     
     users.findOne({login:req.body.username,password:req.body.password},function(err,user){
         if(user != null){
             req.session.authenticated = true;
             req.session.user_id = user._id;
             req.session.user = user.login;                        
             res.redirect("/app");             
         }else{
             res.sendFile(path.resolve('public/views/index.html'));
         }
     });  
 });
    
    
app.use("/app",session_middleware);
app.use("/app",router_app);  
    
} //module exports
