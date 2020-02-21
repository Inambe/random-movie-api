const moment = require("moment")

class ReqLog {
	constructor(ip, date) {
		this.ip = ip
		this.date = date
	}
	createdForHrs() {
		const diff = moment(new Date()).diff(this.date)
		return Math.round(moment.duration(diff).asHours())
	}
}
module.exports = ReqLog
