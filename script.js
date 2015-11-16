console.log("Hey! The script file is working!");

function alpha(x) {
	x += 101;
	return x;
}

function beta(x) {
	x += 1000;
	return x;
}

function gamma(x) {
	x += 10000;
	return x;
}

console.log("Result is " + alpha(beta(gamma(10))));