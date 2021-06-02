module.exports = {
	_id: {
		type: Integer,
		required: true, // Auto-generated on insert by MongoDB
	},
	namespace: {
		type: String,
		required: true,
	},
	blockId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	raw: {
		type: Boolean,
		required: true,
	},
	smeltable: {
		type: Boolean,
		required: false,
	},
	blastable: {
		type: Boolean,
		required: false,
	},
	smokable: {
		type: Boolean,
		required: false,
	},
	burnTime: {
		type: Integer,
		required: false,
	},
	tags: {
		type: Array,
		required: false,
		element: {
			type: Integer,
			required: true, // When tags is present, at least one element must be defined
		},
	},
}
