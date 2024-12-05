import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from 'cors'
const app = express()

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello world")
})


export default app