class ProjectDAO {
	constructor(dao) {
		this.dao = dao
	}

	createTable() {
		const sql = `
		CREATE TABLE IF NOT EXISTS Project (
			ProjectID	INTEGER NOT NULL UNIQUE,
			ProjectName	TEXT NOT NULL,
			ProjectAuthor	TEXT NOT NULL,
			ProjectDescription	TEXT,
			ProjectCreationDate	INTEGER NOT NULL CHECK(ProjectCreationDate >= 0),
			PRIMARY KEY(ProjectID AUTOINCREMENT)
		);`
		return this.dao.run(sql)
	}

	create({ name, author, description = null, createdDate }) {
		return this.dao.run(
			"INSERT INTO Project (ProjectName, ProjectAuthor, ProjectDescription, ProjectCreationDate) VALUES (?, ?, ?, ?)",
			[name, author, description, createdDate]
		)
	}

	update(id, { name = null, author = null, description = null } = {}) {
		if (name == null && author == null && description == null) return

		let updated = []
		if (name != null) updated.push(name)
		if (author != null) updated.push(author)
		if (description != null) updated.push(description)
		updated.push(id)

		return this.dao.run(
			`UPDATE Project SET ${name != null ? "ProjectName = ? " : ""}${
				author != null ? "ProjectAuthor = ? " : ""
			}${
				description != null ? "ProjectDescription = ? " : ""
			}WHERE ProjectID = ?`,
			updated
		)
	}

	delete(id) {
		return this.dao.run("DELETE FROM Project WHERE ProjectID = ?", [id])
	}

	getById(id) {
		return this.dao.get("SELECT * FROM Project WHERE ProjectID = ?", [id])
	}

	getAll() {
		return this.dao.all("SELECT * FROM Project")
	}
}

module.exports = ProjectDAO
