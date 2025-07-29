const express = require('express');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/Blog');
const app = express();
const PORT=5000;

const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use('/blogs',blogRoutes);


mongoose.connect('mongodb://localhost:27017/personal_blog',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB");
});

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
});