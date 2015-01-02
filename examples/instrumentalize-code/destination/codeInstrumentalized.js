// this comment will be preserved
var f1 = function (a, b) {
    console.log('f1:', arguments);
    return a + b;
};
var f2 = function (a) {
    console.log('f2:', arguments);
    return a;
};
var f3 = function (a, b, c) {
    console.log('f3:', arguments);
    return f1(a, b) + f2(c);
};
var result = f3(1, 2, 3);
console.log('\n>>---------\n result:', result, '\n>>---------\n');