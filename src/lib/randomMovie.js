const movies = require("./../data/movies.json")

class RandomMovie {
  constructor() {
    this.movies = movies
  }
  getOne() {
    return movies[Math.floor(Math.random() * this.movies.length)]
  }
}
// exporting a singleton
module.exports = new RandomMovie()
