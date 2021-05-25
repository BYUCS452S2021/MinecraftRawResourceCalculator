const projectDBHandler = require("../database-handler/sqlite/projectdao")

function getProjectList() {
	return "Hello from the projectlist http-handler!"
}

exports.getProjectList = getProjectList
