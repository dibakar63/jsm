const express=require('express');
const cors=require('cors');
const connectDb=require('./db')
const authRouter=require('./router')
connectDb()
const app=express();
app.use(express.json())
app.use(cors());
app.use('/api',authRouter)

app.listen('5000',(req,res)=>{
    console.log('server in running')
})