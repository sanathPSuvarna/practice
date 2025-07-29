const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskroutes=require('./routes/tasks');
const app=express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/tasks', taskroutes);
mongoose.connect('mongodb://localhost:27017/task_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
 .then(() => {
    console.log('✅ Connected to MongoDB');
});

app.get('/',(req,res)=>{
    res.send('Welcome to the Task Tracker API');
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

