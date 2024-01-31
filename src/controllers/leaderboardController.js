const Leaderboard = require("../models/leaderboard")



// get the leaderboard
exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboards = await Leaderboard.find()

        if(leaderboards.length === 0) {
            res.status(404).json({message: "Data not found"})
            return
        }

        res.status(201).json({leaderboard: leaderboards})

    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// create  leaderboard
exports.createLeaderboard = async (req, res) => {
    try {
        
        const { name, timer, clicks } = req.body

        if(name.length === 0) { 
            res.status(400).json({message: "Please enter a name"})
            return
        }

        const newLeader = await Leaderboard.create({
            name: name,
            timer: timer,
            clicks: clicks

        })

        res.status(201).json({leaderboard: newLeader})

    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}
