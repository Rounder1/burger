var orm = require("../config/orm.js"); 
var express = require('express');
var router = express.Router();

router.get("/", function (req, res) { // Must pass object
    orm.selectAll(function(data){
        res.render("index", {allBurgers: data});
    });
});

router.post("/create", function (req, res) { //  Must pass object
    orm.insertOne(req.body.newBurger ,false ,function(data){
        res.redirect('/');
    });  
});

router.post("/update/:id", function(req, res) {
    orm.updateOne(true, req.params.id, function(){
        res.redirect('/');
    });
});

module.exports = router;