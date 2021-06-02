function validateStructure(expectedStructure, actualStructure) {
	for (property in expectedStructure) {
		if (!expectedStructure.hasOwnProperty(property)) continue

		let expectedValue = expectedStructure[property]
		let actualValue = actualStructure[property]
		if (actualValue == null) {
			if (expectedValue.required) return false
			continue
		}
		if (!validateType(expectedValue, actualValue)) return
	}
	return true
}

function validateType(expectedValue, actualValue) {
	if (expectedValue.type === Boolean) return validateBoolean(actualValue)
	if (expectedValue.type === Integer) return validateInteger(actualValue)
	if (expectedValue.type === String) return validateString(actualValue)
	if (expectedValue.type === Array)
		return validateArray(actualValue, expectedValue.element)
	if (expectedValue.type === Object)
		return validateObject(actualValue, expectedValue.properties)
	return false
}

function validateBoolean(value) {
	return typeof value === "boolean" || value instanceof Boolean
}

function validateInteger(value) {
	if (typeof value !== "number" && !(value instanceof Number)) return false
	if (value instanceof Number) value = value.valueOf()
	return Number.isInteger(value)
}

function validateString(value) {
	return typeof value === "string" || value instanceof String
}

function validateArray(value, elementStructure) {
	if (!Array.isArray(value)) return false

	for (element of value) {
		if (!validateStructure(elementStructure, element)) return false
	}
	return true
}

function validateObject(value, properties) {
	if (typeof value !== "object") return false

	for (property of value) {
		if (!value.hasOwnProperty(property)) continue
		if (!validateStructure(properties, property)) return false
	}
	return true
}

module.exports = validateStructure
