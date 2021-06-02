// possibly include validator here

const item = require("./specifications/item")

class ItemDAO {
	constructor(items, pageSize) {
		this.items = items
		this.pageSize = pageSize
	}

	// Read Operations
	async find(id) {
		const result = await this.items.findOne({ _id: id })
		return result
	}

	async findByNamespaceAndBlockId(namespace, blockId) {
		const result = await this.items.findOne({ namespace, blockId })
		return result
	}

	async findAll() {
		const cursor = this.items.find()
		const results = await cursor.toArray()
		cursor.close()
		return results
	}

	async findPage(page) {
		const cursor = this.items
			.find()
			.sort({ namespace: 1, blockId: 1 })
			.skip((page - 1) * this.pageSize)
			.limit(this.pageSize)
		const results = await cursor.toArray()
		cursor.close()
		return results
	}

	// Insert Operations
	async insert(item) {
		item.createdDate = new Date()
		const result = await this.items.insertOne(item)
		return { success: result.insertedCount === 1, id: result.insertedId }
	}

	async insertMany(items) {
		for (item of items) {
			item.createdDate = new Date()
		}

		const result = await this.items.insertMany(items)
		return {
			success: result.insertedCount === items.length,
			ids: result.insertedIds,
		}
	}

	// Delete Operations
	async delete(id) {
		await this.items.deleteOne({ _id: id })
	}

	async deleteByNamespaceAndBlockId(namespace, blockId) {
		await this.items.deleteOne({ namespace, blockId })
	}

	// Update Operations
	async update(id, updatedValues) {
		let updates = { $set: {} }
		for (property in updatedValues) {
			if (!updatedValues.hasOwnProperty(property)) continue
			if (Array.isArray(updatedValues[property])) continue
			updates.$set[property] = updatedValues[property]
		}
		await this.items.updateOne({ _id: id }, updates)
	}

	async addTag(itemId, tagId) {
		await this.items.updateOne({ _id: itemId }, { $push: { tags: tagId } })
	}

	async addTags(itemId, tagIds) {
		await this.items.updateOne(
			{ _id: itemId },
			{ $push: { tags: { $each: tagIds } } }
		)
	}

	async removeTag(itemId, tagId) {
		await this.items.updateOne({ _id: itemId }, { $pull: { tags: tagId } })
	}

	async removeTags(itemId, tagIds) {
		await this.items.updateOne(
			{ _id: itemId },
			{ $pull: { tags: { $in: tagIds } } }
		)
	}
}

module.exports = ItemDAO
