const path = require("path")
const constants = require("./../constants")

const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const adapter = new FileSync(path.resolve(__dirname, "./../data/lowdb.json"))
const db = low(adapter)
db.defaults({ [constants.strings.REQ_LOG_TABLE_NAME]: [] }).write()

module.exports = db
