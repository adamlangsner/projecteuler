// http://projecteuler.net/problem=9

var _ = require("underscore");

var c = function(a, b) {
	return Math.sqrt(a*a + b*b);
}

var sum = function(a, b) {
	return a + b + c(a,b) == 1000;
}

var a = false, b = false;
for (var i=1; i<=500; i++) {
	for (var j=1; j<500; j++) {
		!a && !b && sum(i,j) && (a = i) && (b = j);
	}
}

console.log('a: '+a+', b: '+b+', c: '+c(a, b));
console.log('product: ' + (a*b*c(a,b)));