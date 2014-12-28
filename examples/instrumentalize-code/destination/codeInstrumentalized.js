// this comment will be preserved
var f1 = function (a, b) {
    console.log('f1:', arguments);
    return a + b;
};
var result = f1(1, 2);
console.log('\n>>---------\n result:', result, '\n>>---------\n');