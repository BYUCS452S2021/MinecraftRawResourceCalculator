class ItemDAO {
	constructor(dao) {
		this.dao = dao
	}

	createTable() {
		const sql = `
		CREATE TABLE IF NOT EXISTS Item (
			ItemID	INTEGER NOT NULL UNIQUE,
			Namespace	TEXT NOT NULL,
			BlockID	TEXT NOT NULL,
			ItemName	TEXT NOT NULL,
			StackSize	INTEGER NOT NULL,
			IsRaw	INTEGER NOT NULL CHECK(IsRaw IN (TRUE, FALSE)),
			IsSmeltable	INTEGER NOT NULL CHECK(IsSmeltable IN (TRUE, FALSE)),
			IsBlastable	INTEGER NOT NULL CHECK(IsBlastable IN (TRUE, FALSE)),
			IsSmokable	INTEGER NOT NULL CHECK(IsSmokable IN (TRUE, FALSE)),
			BurnTime	INTEGER NOT NULL CHECK(BurnTime >= 0),
			PRIMARY KEY(ItemID AUTOINCREMENT)
		);`
		return this.dao.run(sql)
	}

	create({
		namespace,
		blockId,
		name,
		stackSize,
		isRaw,
		isSmeltable,
		isBlastable,
		isSmokable,
		burnTime,
	}) {
		return this.dao.run(
			"INSERT INTO Item (Namespace, BlockID, ItemName, StackSize, IsRaw, IsSmeltable, IsBlastable, IsSmokable, BurnTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
			[
				namespace,
				blockId,
				name,
				stackSize,
				isRaw,
				isSmeltable,
				isBlastable,
				isSmokable,
				burnTime,
			]
		)
	}

	update(
		id,
		{
			namespace = null,
			blockId = null,
			name = null,
			stackSize = null,
			isRaw = null,
			isSmeltable = null,
			isBlastable = null,
			isSmokable = null,
			burnTime = null,
		} = {}
	) {
		let updated = []
		if (namespace != null) updated.push(namespace)
		if (blockId != null) updated.push(blockId)
		if (name != null) updated.push(name)
		if (stackSize != null) updated.push(stackSize)
		if (isRaw != null) updated.push(isRaw)
		if (isSmeltable != null) updated.push(isSmeltable)
		if (isBlastable != null) updated.push(isBlastable)
		if (isSmokable != null) updated.push(isSmokable)
		if (burnTime != null) updated.push(burnTime)
		updated.push(id)

		return this.dao.run(
			`UPDATE Item SET ${namespace != null ? "Namespace = ? " : ""}${
				blockId != null ? "BlockID = ? " : ""
			}${name != null ? "ProjectName = ? " : ""}${
				stackSize != null ? "StackSize = ? " : ""
			}${isRaw != null ? "IsRaw = ? " : ""}${
				isSmeltable != null ? "IsSmeltable = ? " : ""
			}${isBlastable != null ? "IsBlastable = ? " : ""}${
				isSmokable != null ? "IsSmokable = ? " : ""
			}${burnTime != null ? "BurnTime = ? " : ""}WHERE ItemID = ?`,
			updated
		)
	}

	delete(id) {
		return this.dao.run("DELETE FROM Item WHERE ItemID = ?", [id])
	}

	getById(id) {
		return this.dao.get("SELECT * FROM Item WHERE ItemID = ?", [id])
	}

	getAll() {
		return this.dao.all("SELECT * FROM Item")
	}
}

module.exports = ItemDAO
