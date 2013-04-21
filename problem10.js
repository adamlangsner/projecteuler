// http://projecteuler.net/problem=10

var _ = require("underscore"),
	lib = require("./lib");

var sum = 17;
for (var i=11; i < 2000000; i++) {
	if ( i % 2 == 0 ||
		 i % 3 == 0 ||
		 i % 5 == 0 ||
		 i % 7 == 0) {
		continue;
	}

	if (lib.isPrime(i)) {
		sum += i;
		console.log(i);
	}
}

console.log('sum of primes below 2,000,000:', sum);