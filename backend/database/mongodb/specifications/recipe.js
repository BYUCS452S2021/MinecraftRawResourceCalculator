module.exports = {
	_id: {
		type: Integer,
		required: true, // Auto-generated on insert by MongoDB
	},
	resultItem: {
		type: Integer, // Foreign key to Item collection
		required: true,
	},
	resultQuantity: {
		type: Integer,
		required: true,
	},
	smeltingRecipe: {
		type: Boolean, // Indicates whether this is a smelting recipe and should be used in fuel calculations
		required: true,
	},
	ingredients: {
		type: Array,
		required: true,
		element: {
			type: Object,
			required: true,
			properties: {
				itemId: {
					type: Integer,
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
