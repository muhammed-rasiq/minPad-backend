const express = require('express')
const dbConnect = require('./config/db')


const app = express()

dbConnect()

const port = 3000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})