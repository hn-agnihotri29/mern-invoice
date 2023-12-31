import chalk from "chalk";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import express from "express";
import "dotenv/config"
import {systemLogs, morganMiddleware} from "./utils/Logger.js"
 

const app =  express()

if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use(express.json())  
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(morganMiddleware )

app.get("/api/v1/test", (req, res) => {
    res.json({Hi: "Welcome to invoice App"})
})

 
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(
        `${chalk.green.bold("✔")} Server is running in ${chalk.yellow.bold(process.env.NODE_ENV)} mode on port ${chalk.blue.bold(PORT)}`
    )
    systemLogs.info(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
})
