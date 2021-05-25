class ProjectComponentDAO {
	constructor(dao) {
		this.dao = dao
	}

	createTable() {
		const sql = `
		CREATE TABLE IF NOT EXISTS ProjectComponent (
			ProjectID	INTEGER NOT NULL,
			ItemID	INTEGER NOT NULL,
			Quantity	INTEGER NOT NULL CHECK(Quantity >= 0),
			PRIMARY KEY(ProjectID,ItemID),
			FOREIGN KEY(ItemID) REFERENCES Item(ItemID) ON DELETE CASCADE,
			FOREIGN KEY(ProjectID) REFERENCES Project(ProjectID) ON DELETE CASCADE
		);`
		return this.dao.run(sql)
	}

	create({ projectId, itemId, quantity }) {
		return this.dao.run(
			"INSERT INTO ProjectComponent (ProjectID, ItemID, Quantity) VALUES (?, ?, ?)",
			[projectId, itemId, quantity]
		)
	}

	update(projectId, itemId, quantity = null) {
		if (quantity == null) return

		let updated = []
		if (quantity != null) updated.push(quantity)
		updated.push(projectId)
		updated.push(itemId)

		return this.dao.run(
			`UPDATE ProjectComponent SET ${
				quantity != null ? "Quantity = ? " : ""
			}WHERE ProjectID = ? AND ItemID = ?`,
			updated
		)
	}

	delete(projectId, itemId) {
		return this.dao.run(
			"DELETE FROM ProjectComponent WHERE ProjectID = ? AND ItemID = ?",
			[projectId, itemId]
		)
	}

	getByProjectIdAndItemId(projectId, itemId) {
		return this.dao.get(
			"SELECT * FROM ProjectComponent WHERE ProjectID = ? AND ItemID = ?",
			[projectId, itemId]
		)
	}

	getByProjectId(projectId) {
		return this.dao.all(
			"SELECT * FROM ProjectComponent WHERE ProjectID = ?",
			[projectId]
		)
	}

	getByItemId(itemId) {
		return this.dao.all("SELECT * FROM ProjectComponent WHERE ItemID = ?", [
			itemId,
		])
	}

	getAll() {
		return this.dao.all("SELECT * FROM ProjectComponent")
	}
}

module.exports = ProjectComponentDAO
