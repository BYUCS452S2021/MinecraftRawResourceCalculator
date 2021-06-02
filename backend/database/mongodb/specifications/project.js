module.exports = {
	_id: {
		type: Integer,
		required: true, // Auto-generated on insert by MongoDB
	},
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	createdDate: {
		type: Integer, // Epoch timestamp (number of milliseconds since midnight, 1 January 1970); generated server-side (will be over-written if provided by the client)
		required: true,
	},
	components: {
		type: Array,
		required: true,
		element: {
			type: Object,
			required: false,
			properties: {
				itemId: {
					type: Integer, // Foreign key to Item collection
					required: true,
				},
				quantity: {
					type: Integer,
					required: true,
				},
			},
		},
	},
}
