const Movie = require("./movie")

class MovieBuilder {
	constructor(name) {
		this.name = name
	}
	releaseDate(date) {
		this.releaseDate = date
		return this
	}
	cast(cast) {
		this.cast = cast
		return this
	}
	build() {
		let movie = new Movie(this)
		return movie
	}
}
module.exports = MovieBuilder
