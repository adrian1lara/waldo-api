const mongoose = require('mongoose')

const leaderboard = new mongoose.Schema({
    name: {type: String, required: true},
    timer: {type: Number, required: true},
    clicks: {type: Number}
})

module.exports = mongoose.model("Leaderboard", leaderboard)