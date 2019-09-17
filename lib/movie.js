class Movie {
	constructor(builder) {
		this.name = builder.name
		this.releaseDate = builder.releaseDate
		this.cast = builder.cast
	}
}
module.exports = Movie
