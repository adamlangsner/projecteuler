// http://projecteuler.net/problem=12

var lib = require("./lib"),
	_ = require("underscore");

var i = 0, sum = 0, factors = 0;

while (factors < 500) {
	sum += ++i;

	factors = lib.factors(sum).length+2;
}

console.log(sum);