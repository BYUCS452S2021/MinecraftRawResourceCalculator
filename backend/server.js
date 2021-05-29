// Dependencies
const express = require("express")
const cors = require("cors")
const { getProject, calculateResources } = require("./http-handler/project")
const { getProjectList } = require("./http-handler/projectlist")
const { createProject } = require("./http-handler/createproject")

// Server Configs (static variables)
const PORT = 8080

// Initialize and Configure Express App
const app = express()
app.use(express.json())

// Enable CORS on the app
function originAllowed(origin) {
	let allowedOrigins = [/^http:\/\/127.0.0.1/, /http:\/\/localhost/]
	for (allowed of allowedOrigins) {
		if (allowed.test(origin)) {
			return true
		}
	}
	return false
}

app.use(
	cors({
		origin: (origin, callback) => {
			if (originAllowed(origin)) {
				callback(null, true)
				return
			}
			callback(new Error("Invalid request origin."))
		},
		methods: ["GET", "POST"],
	})
)

// Route Parameter Sanitization
app.param("project", (req, res, next, id) => {
	req.project = parseInt(id)
	if (isNaN(req.project)) {
		next(createError(400, "Invalid Project ID"))
		return
	}
	next()
})

// Endpoints
app.get("/", (req, res) => {
	res.json(
		responseWithMessage(
			true,
			"Welcome to the Minecraft Survival Resource Calculator (Minecraft SRC)!"
		)
	)
})

app.get("/projectlist", (req, res) =>
	res.json(responseWithMessage(true, getProjectList()))
)

app.post("/createproject", (req, res) => {
	console.log(JSON.stringify(req.body))
	res.json(responseWithMessage(true, createProject(req.body)))
})

// Create a regular /project endpoint here when we add the ability to filter
// projects (i.e. only show the projects by a particular author or projects
// created in the last 3 months, etc.)

app.get("/project/:project", (req, res) => {
	console.log(req.project)
	res.json(responseWithMessage(true, getProject(req.project)))
})

app.get("/project/:project/calculateresources", (req, res) => {
	console.log(req.project)
	res.json(responseWithMessage(true, calculateResources(req.project)))
})

// Set app to listen on Selected Port
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))

// Response helpers
function responseWithMessage(success, message) {
	return { success, data: { message } }
}

function responseWithData(success, data) {
	return { success, data }
}

function createError(status, message) {
	let err = new Error(message)
	err.status = status
	return err
}
