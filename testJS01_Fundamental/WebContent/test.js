function test() {
	return 10;
}
function test2() {
	return function() {
		return 1000;
	};
}

var t = test();
console.log(t);// 10

var t2 = test2();
console.log(t2);// return function
console.log(t2());// return result

function test3(fn) {
	console.log(fn);
	console.log(fn());
}

test3(function() {
	var su = 3000;
	return su;
});

console.log("==================");
test3(t2);

function test4(x, y) {
	return x + y;
}

var result = test4(100, 200);
console.log(result);

// (함수명)(인자값)

var result2 = (function(x, y) {
	return x + y;
})(100, 200);
console.log(result2);

(function(x, y) {
	console.log(x + y);
})(1000, 2000);