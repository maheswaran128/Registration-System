const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users');


router.get(["/","/login"],(req,res)=>{
    res.render("login");
});

router.get("/registration",(req,res)=>{
    res.render("registration");
});

router.get("/profile", UserController.isLoggedIn,(req,res)=>{
    if(req.user){
        res.render("profile",{user:req.user});
    }else{
        res.redirect("/login");
    }
});

router.get("/home", UserController.isLoggedIn,(req,res)=>{
    //console.log(req.name);
    if(req.user){
        res.render("home",{user:req.user});
    }else{
        res.redirect("/login");
    }
    
});

module.exports= router;