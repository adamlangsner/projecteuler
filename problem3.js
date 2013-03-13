// http://projecteuler.net/problem=3

var _ = require("underscore"),
	lib = require("./lib");

var factors2 = lib.factors(600851475143),
	primes = [];

_.each(factors2, function(f) {
	var factors3 = lib.factors(f);

	if (factors3.length == 0) {
		primes.push(f);
	}
});

console.log(_.max(primes));