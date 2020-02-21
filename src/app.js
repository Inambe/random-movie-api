const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const movieRouter = require("./routes/movie")

app.use("/", movieRouter)
app.get("/", (req, res) => {
	res.json({
		message: "Hi! How you doing?"
	})
})

app.listen(port, () => {
	console.log(`server is running on post: ${port}`)
})
