var express = require('express');
var router = express.Router();
var users = require("../../models/usersModel").users;
var courses = require("../../models/coursesModel").courses;
var path = require('path');


router.get("/", function (req, res) {
    res.sendFile(path.resolve('public/views/coursesList.html'));
});

router.get("/userData", function (req, res) {

 var username = req.session.user;
   
    
   users.findOne({login:username},function(err,user){
            
			if(user != null){
                
        res.json(user); 
        }
        else{
            console.log("Error: " + err);
        }
            
		}); //end function


});

router.get("/logout", function (req, res) {
    req.session = null;
    res.json("");
});


router.get("/listaCursos",function(req,res){
    
    courses.find({users:req.session.user},function(err,data){
        
        if(data != null){
            res.json(data);
        }else{
            console.log("Error: " + err);
        }
    });
});

module.exports = router;