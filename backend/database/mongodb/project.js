// const validateStructure = require("./validator")

class ProjectDAO {
	constructor(projects, pageSize) {
		this.projects = projects
		this.pageSize = pageSize // This controls how many results are returned in a paged request
	}

	// Read Operations
	async find(id) {
		const result = await this.projects.findOne({ _id: id })
		return result
	}

	async findByAuthor(author) {
		const cursor = this.projects.find({ author })
		const results = await cursor.toArray()
		cursor.close()
		return results
	}

	async findByComponent(componentId) {
		// Not sure this works, but I think it should based on the documentation I've seen
		const cursor = this.projects.find({ "components.$[]._id": componentId })
		const results = await cursor.toArray()
		cursor.close()
		return results
	}

	async findAll() {
		const cursor = this.projects.find()
		const results = await cursor.toArray()
		cursor.close()
		return results
	}

	async findPage(page) {
		const cursor = this.projects
			.find()
			.sort({ _id: 1, createdDate: -1, author: 1, name: 1 })
			.skip((page - 1) * this.pageSize)
			.limit(this.pageSize)
		const results = await cursor.toArray()
		cursor.close()
		return results
	}

	// Add other find methods here to filter on other properties

	// Insert Operations
	async insert(project) {
		project.createdDate = new Date()
		const result = await this.projects.insertOne(project)
		return { success: result.insertedCount === 1, id: result.insertedId }
	}

	async insertMany(projects) {
		for (project of projects) {
			project.createdDate = new Date()
		}

		const result = await this.projects.insertMany(projects)
		return {
			success: result.insertedCount === projects.length,
			ids: result.insertedIds,
		}
	}

	// Delete Operations
	async delete(id) {
		await this.projects.deleteOne({ _id: id })
	}

	async deleteByAuthor(author) {
		await this.projects.deleteMany({ author })
	}

	// Update Operations
	async update(id, updatedValues) {
		let updates = { $set: {} }
		for (property in updatedValues) {
			if (!updatedValues.hasOwnProperty(property)) continue
			if (Array.isArray(updatedValues[property])) continue
			updates.$set[property] = updatedValues[property]
		}
		await this.projects.updateOne({ _id: id }, updates)
	}

	async addComponent(id, component) {
		await this.projects.updateOne(
			{ _id: id },
			{ $push: { components: component } }
		)
	}

	async addComponents(id, components) {
		await this.projects.updateOne(
			{ _id: id },
			{ $push: { components: { $each: components } } }
		)
	}

	async deleteComponent(id, componentId) {
		await this.projects.updateOne(
			{ _id: id },
			{ $pull: { components: { _id: componentId } } }
		)
	}

	async deleteComponents(id, componentIds) {
		await this.projects.updateOne(
			{ _id: id },
			{ $pull: { components: { _id: { $in: componentIds } } } }
		)
	}
}

module.exports = ProjectDAO
