var sum = 0,
	last = 1,
	current = 2;


(recurse = function(last, current) {
	var fib = last + current;
	if (fib > 4000000) {
		return;
	}

	if (fib % 2 == 0) {
		sum += fib;
	}

	recurse(current, fib);
})(1, 1);

console.log(sum);