const validateHouseData = {
	houseName(event) {
		const name = event.target.value;
		let obj = { style: 'valid', data: name };

		if (/[^a-zA-Z]+/g.test(name) || name.length > 40) {
			obj = { style: 'invalid', data: name };
		}

		return obj;
	},

	summary(event) {
		const summary = event.target.value;
		let obj = { style: 'valid', data: summary };

		if (summary.length > 250) {
			obj = { style: 'invalid', data: summary };
		}

		return obj;
	},

	description(event) {
		const description = event.target.value;
		let obj = { style: 'valid', data: description };

		if (description.length > 1500) {
			obj = { style: 'invalid', data: description };
		}

		return obj;
	},

	imageCover(event) {
		const imageCover = event.target.value;
		let obj = { style: 'valid', data: imageCover };

		if (imageCover.length > 150) {
			obj = { style: 'invalid', data: imageCover };
		}

		return obj;
	},

	location(event) {
		const location = event.target.value;
		let obj = { style: 'valid', data: location };

		if (location.length > 150) {
			obj = { style: 'invalid', data: location };
		}

		return obj;
	},

	maxGroupSize(event) {
		const maxGroupSize = event.target.value;
		let obj = { style: 'valid', data: maxGroupSize };

		if (maxGroupSize <= 0) {
			obj = { style: 'invalid', data: maxGroupSize };
		}

		return obj;
	},

	price(event) {
		const price = event.target.value;
		let obj = { style: 'valid', data: price };

		if (price <= 0) {
			obj = { style: 'invalid', data: price };
		}

		return obj;
	},
};

export default validateHouseData;
