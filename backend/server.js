// Dependencies
const express = require("express")
const cors = require("cors")

// Server Configs (static variables)
const PORT = 8080

// Initialize Express App
const app = express()

// Enable CORS on the app
app.use(
	cors({
		origin: ["http://127.0.0.1", "http://localhost"],
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
	res.json(responseWithMessage(true, "Hello from the projectlist endpoint!"))
)

app.post("/createproject", (req, res) =>
	res.json(
		responseWithMessage(true, "Hello from the createproject endpoint!")
	)
)

// Create a regular /project endpoint here when we add the ability to filter
// projects (i.e. only show the projects by a particular author or projects
// created in the last 3 months, etc.)

app.get("/project/:project", (req, res) =>
	res.json(responseWithMessage(true, "Hello from the project endpoint!"))
)

app.get("/project/:project/calculateresources", (req, res) =>
	res.json(
		responseWithMessage(true, "Hello from the calculateresources endpoint!")
	)
)

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
