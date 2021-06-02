class RecipeIngredientDAO {
	constructor(dao) {
		this.dao = dao
	}

	createTable() {
		const sql = `
		CREATE TABLE IF NOT EXISTS RecipeIngredient (
			RecipeID	INTEGER NOT NULL,
			ItemID	INTEGER NOT NULL,
			Quantity	INTEGER NOT NULL CHECK(Quantity >= 0),
			FOREIGN KEY(ItemID) REFERENCES Item(ItemID) ON DELETE CASCADE,
			FOREIGN KEY(RecipeID) REFERENCES Recipe(RecipeID) ON DELETE CASCADE,
			PRIMARY KEY(RecipeID,ItemID)
		);`
		return this.dao.run(sql)
	}

	create({ recipeId, itemId, quantity }) {
		return this.dao.run(
			"INSERT INTO RecipeIngredient (RecipeID, ItemID, Quantity) VALUES (?, ?, ?)",
			[recipeId, itemId, quantity]
		)
	}

	update(recipeId, itemId, quantity = null) {
		if (quantity == null) return

		let updated = []
		if (quantity != null) updated.push(quantity)
		updated.push(recipeId)
		updated.push(itemId)

		return this.dao.run(
			`UPDATE RecipeIngredient SET ${
				quantity != null ? "Quantity = ? " : ""
			}WHERE RecipeID = ? AND ItemID = ?`,
			updated
		)
	}

	delete(recipeId, itemId) {
		return this.dao.run(
			"DELETE FROM RecipeIngredient WHERE RecipeID = ? AND ItemID = ?",
			[recipeId, itemId]
		)
	}

	getByRecipeIdAndItemId(recipeId, itemId) {
		return this.dao.get(
			"SELECT * FROM RecipeIngredient WHERE RecipeID = ? AND ItemID = ?",
			[recipeId, itemId]
		)
	}

	getByRecipeId(recipeId) {
		return this.dao.all(
			"SELECT * FROM RecipeIngredient WHERE RecipeID = ?",
			[recipeId]
		)
	}

	getByItemId(itemId) {
		return this.dao.all("SELECT * FROM RecipeIngredient WHERE ItemID = ?", [
			itemId,
		])
	}

	getAll() {
		return this.dao.all("SELECT * FROM RecipeIngredient")
	}
}

module.exports = RecipeIngredientDAO
