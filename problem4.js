// http://projecteuler.net/problem=4

var _ = require("underscore"),
	_s = require("underscore.string");

var max = -1;
for (var i=999; i>=100; i--) {
	for (var j=999; j>=100; j--) {
		var sum = (i*j).toFixed(0);
		if (sum.length % 2 == 0) {
			if (sum.substr(0, sum.length/2) == _s.reverse(sum.substr(sum.length/2, sum.length))) {
				if (parseInt(sum) > max) {
					max = parseInt(sum);
				}
			}
		} else {
			if (sum.substr(0, Math.floor(sum.length/2)) == _s.reverse(sum.substr(Math.ceil(sum.length/2), sum.length))) {
				if (parseInt(sum) > max) {
					max = parseInt(sum);
				}
			}
		}
	}
}

console.log(max);