const projectDBHandler = require("../database-handler/sqlite/projectdao")

function createProject(data) {
	return "Hello from the createproject http-handler!"
}

exports.createProject = createProject
