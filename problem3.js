var _ = require("underscore");

function r(top) {
	var i = 2,
		factors1 = [];
	while (true) {
		if (i >= top) {
			break;
		}

		if (top % i == 0) {
			if (_.contains(factors1, top/i)) {
				break;
			}
			factors1.push(i);
			factors1.push(top/i);
		}
		i++;
	}

	return factors1;
}

var factors2 = r(600851475143),
	primes = [];

_.each(factors2, function(f) {
	var factors3 = r(f);

	if (factors3.length == 0) {
		primes.push(f);
	}
});

console.log(_.max(primes));