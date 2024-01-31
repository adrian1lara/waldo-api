const express = require('express')
const router = express.Router()

const leaderboardController = require("../controllers/leaderboardController")



// create form of leaderboard
router.post("/api/leaderboard/submit",  leaderboardController.createLeaderboard)

//get all leaderboard
router.get("/api/leaderboard", leaderboardController.getLeaderboard)



module.exports = router