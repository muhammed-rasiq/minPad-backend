const express = require('express')
const dbConnect = require('./config/db')
const router = require('./router/route')
const corse = require('cors')


const app = express()

app.use(corse())

app.use(express.json())
app.use(router)

dbConnect()



const port = 3000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})