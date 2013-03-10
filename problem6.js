// http://projecteuler.net/problem=6

var _ = require("underscore");

var range = _.range(101).slice(1),
	sum_of_squares = _.reduce(range, function(memo, i) { return memo + (i*i); }, 0),
	square_of_sum  = Math.pow(_.reduce(range, function(memo, i) { return memo + i; }, 0), 2);

console.log(square_of_sum - sum_of_squares);