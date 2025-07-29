const express=require('express');
const router=express.Router();
const blogModel=require('../models/blog');

router.get('/',async(req, res)=>{
    const blogs=await blogModel.find();
    res.json(blogs);
});

router.post('/',async(req,res)=>{
    const {title,body}=req.body;
    const newblog=new blogModel({
        title,body
    })
    await newblog.save();
    res.json(newblog);
});

router.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const {title,body}=req.body;
    const updatedBlog=await blogModel.findByIdAndUpdate(id,{title,body},{new:true});
    res.json(updatedBlog);
});

router.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    await blogModel.findByIdAndDelete(id);
    res.json({message:"Blog deleted successfully"});
});

module.exports=router;