const sqlite3 = require("sqlite3")

class DatabaseDAO {
	constructor(dbFilePath) {
		this.db = new sqlite3.Database("./minecraftsrc.sqlite", err => {
			if (err) {
				console.log("Database connection failed!", JSON.stringify(err))
			} else {
				console.log("Connected to database!")
			}
		})
	}

	run(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.run(sql, params, function (err) {
				if (err) {
					console.log(
						`SQL Error! Failed running ${sql}`,
						JSON.stringify(err)
					)
					reject(err)
				} else {
					resolve({ id: this.lastID })
				}
			})
		})
	}

	get(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.get(sql, params, (err, result) => {})
		})
	}

	all(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.all(sql, params, (err, rows) => {
				if (err) {
					console.log(
						`SQL Error! Failed running ${sql}`,
						JSON.stringify(err)
					)
					reject(err)
				} else {
					resolve(rows)
				}
			})
		})
	}
}

module.exports = DatabaseDAO
