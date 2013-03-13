var _ = require("underscore");

exports.factors = function(top) {
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
};