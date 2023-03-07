const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const userRoutes = require('./routes/UserRoutes')

app.use('/user',userRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/mylib",{},(err)=>{
    if(err){
        console.log("error in db connections....")
    }
    else{
        console.log("db connected....")
    }
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
}) 