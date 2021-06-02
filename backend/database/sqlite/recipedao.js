class RecipeDAO {
	constructor(dao) {
		this.dao = dao
	}

	createTable() {
		const sql = `
		CREATE TABLE IF NOT EXISTS Recipe (
			RecipeID	INTEGER NOT NULL UNIQUE,
			ResultItemID	INTEGER NOT NULL,
			ResultQuantity	INTEGER NOT NULL,
			RecipeType	TEXT NOT NULL CHECK(RecipeType IN ("crafting", "smelting")),
			FOREIGN KEY(ResultItemID) REFERENCES Item(ItemID) ON DELETE CASCADE,
			PRIMARY KEY(RecipeID AUTOINCREMENT)
		);`
		return this.dao.run(sql)
	}

	create({ result, resultQuantity, type }) {
		return this.dao.run(
			"INSERT INTO Recipe (ResultItemID, ResultQuantity, RecipeType) VALUES (?, ?, ?)",
			[result, resultQuantity, type]
		)
	}

	update(id, resultQuantity = null) {
		if (resultQuantity == null) return

		let updated = []
		if (resultQuantity != null) updated.push(resultQuantity)
		updated.push(id)

		return this.dao.run(
			`UPDATE Recipe SET ${
				resultQuantity != null ? "ResultQuantity = ? " : ""
			}WHERE ProjectID = ?`,
			updated
		)
	}

	delete(id) {
		return this.dao.run("DELETE FROM Recipe WHERE RecipeID = ?", [id])
	}

	getById(id) {
		return this.dao.get("SELECT * FROM Recipe WHERE RecipeID = ?", [id])
	}

	getAll() {
		return this.dao.all("SELECT * FROM Recipe")
	}
}

module.exports = RecipeDAO
