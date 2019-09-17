const router = require("express").Router()
const randomMovie = require("./../lib/randomMovie")

router.get("/movie/random", (req, res) => {
	const movie = randomMovie.getOne()
	res.json(movie)
})
module.exports = router
