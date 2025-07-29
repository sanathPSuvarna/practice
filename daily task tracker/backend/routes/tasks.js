const express = require('express');
const router = express.Router();
const Task=require('../models/Task');


router.get('/', async(req,res)=>{
    const tasks =await Task.find();
    res.json(tasks);
});

router.post('/',async(req, res) => {
    const {text} =req.body;
    const newTask= new Task({text});
    const savedTask=await newTask.save();
    res.json(savedTask);
});

router.put('/:id',async(req,res)=>{
    const task=await Task.findById(req.params.id);
    task.completed=!task.completed;
    const updatedTask=await task.save();
    res.json(updatedTask);
});
router.delete('/:id',async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message: 'Task deleted successfully'});
});

module.exports = router;
