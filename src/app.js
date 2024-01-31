require('dotenv').config()
require('./config/connectionDB').connect()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const leaderboardRouter = require("./routes/leaderboardRoutes")

app.use(bodyParser.json())
app.use(cors())

app.use("/", leaderboardRouter)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})