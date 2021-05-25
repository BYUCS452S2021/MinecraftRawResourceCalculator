const projectDBHandler = require("../database-handler/sqlite/projectdao")

function getProject(projectID) {
	return projectDBHandler.getProject(projectID)
}

function calculateResources(projectID) {
	// Algorithm:
	// 		Retrieve Project and Project Components
	// 		Retrieve Items referenced by Project Components
	//		While some resources are still not raw resources, retrieve the items needed to craft these items and keep going
	//		Return the final list of raw resources and their quantities
	return "Hello from the calculateResources method of the project http-handler!"
}

exports.getProject = getProject
exports.calculateResources = calculateResources
