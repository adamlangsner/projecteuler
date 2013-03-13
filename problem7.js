// http://projecteuler.net/problem=7

var _ = require("underscore"),
	lib = require("./lib");

var primes = [];

var i = 2;
while(primes.length < 10001) {
	var factors = lib.factors(i);

	if (!factors.length) {
		primes.push(i);
	}

	i++;
}

console.log(primes[primes.length-1]);