import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "26kb"}))
app.use(express.static('public'))
app.use(cookieParser())

app.use((req, _, next) => {
    console.log(`Recieved ${req.method} request with body:`, req.body);
    console.log(`Received ${req.method} request with params:`, req.params);
    next();
})


import emotionRouter from "./routes/entries.routes.js"

app.use("/api/v1/emotions", emotionRouter)

export { app }