// http://projecteuler.net/problem=5

var _ = require("underscore");

var factors = [2520, 11, 13, 16, 17, 19];
var start = _.reduce(factors, function(memo, num) { return memo * num; }, 1);

var min = start+1;
for (var i = start; i > 2520; i-=2520) {
	var guy = _.reduce(factors, function(memo, f) { return memo && i % f == 0; }, true);

	if (guy && i < min) {
		min = i;
	}
}

console.log(min);