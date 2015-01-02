// this comment will be preserved
var f1 = function (a,b) {
 return a+b;
};
var f2 = function (a) {
 return a;
};
var f3 = function (a,b,c) {
 return f1(a,b) + f2(c);
};

var result = f3(1,2,3);

console.log('\n>>---------\n result:',
			result,
			'\n>>---------\n');

