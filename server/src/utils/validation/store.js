export const validateNewStoreInput = (name, location, description, rating) => {
	const errors = {}

	if (name.trim() === '') {
		errors.name = 'Name must not be empty'
	}

	if (location.trim() === '') {
		errors.location = 'Location must not be empty'
	}

	if (description.trim() === '') {
		errors.description = 'Description must not be empty'
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1
	}
}
