const lowdb = require("../lib/lowdb")
const ReqLog = require("../lib/reqLog")
const constants = require("./../constants")

const limitRequests = (req, res, next) => {
	const ip = req.ip
	const { REQ_LOG_TABLE_NAME } = constants.strings
	const thisIpLogs = lowdb
		.get(REQ_LOG_TABLE_NAME)
		.filter(rl => {
			const reqLog = new ReqLog(rl.ip, rl.date)
			return reqLog.ip === ip && reqLog.createdForHrs() <= 24
		})
		.value()
	if (thisIpLogs.length >= constants.DAILY_REQUESTS_LIMIT) {
		res.status(403).send("limit exceeded")
		return
	}
	const NewReqLog = new ReqLog(ip, new Date())
	lowdb
		.get(REQ_LOG_TABLE_NAME)
		.push(NewReqLog)
		.write()
	next()
}
module.exports = limitRequests
