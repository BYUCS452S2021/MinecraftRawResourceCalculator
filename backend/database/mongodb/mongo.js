const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"

class MongoDB {
	constructor() {
		this.client = new MongoClient(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		try {
			await this.client.connect()

			this.db = await this.client.db("minecraftsrc")
			this.db.command({ ping: 1 })
			console.log("Database connection successful!")
		} catch (err) {
			console.log("Database connection failed.")
			console.log(JSON.stringify(err))
			this.client.close()
		}
	}

	disconnect() {
		this.client.close()
	}
}

module.exports = MongoDB
