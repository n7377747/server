const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Comments=require('../models/comments');

const commentsRouter=express.Router();

commentsRouter.use(bodyParser.json());

commentsRouter.route('/')
.get((req,res,next)=>{
    Comments.find({})
    .then((comments)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(comments);
    },(err)=>next(err))
    .catch((err)=>next(err)); 
})
.post((req,res,next)=>{
     Comments.create(req.body)
    .then((comment)=>{
        console.log("Comment created",comment);
        res.statusCode=200;
        res.setHeader('Content-type','application/json');
        res.json(comment);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

module.exports=commentsRouter;
