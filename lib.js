var _ = require("underscore");

var
factors = function(top) {
	var i = 2,
		factors = [];
	while (true) {
		if (i >= top) {
			break;
		}

		if (top % i == 0) {
			if (_.contains(factors, top/i)) {
				break;
			}
			factors.push(i);
			factors.push(top/i);
		}
		i++;
	}

	return factors;
},

isPrime = function(num) {
	return factors(num).length == 0;
}

module.exports = {
	factors: factors,
	isPrime: isPrime
}