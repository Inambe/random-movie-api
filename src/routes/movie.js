const router = require("express").Router()

const limitRequests = require("../middleware/limitRequests")
const randomMovie = require("./../lib/randomMovie")

router.get("/movie/random", limitRequests, (req, res) => {
	const movie = randomMovie.getOne()
	res.json(movie)
})
module.exports = router
