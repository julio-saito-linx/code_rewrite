// this comment will be preserved
var f_concat = function (a,b) {
 return [a, b];
};


var f_just_return = function (a) {
 return a;
};


function concatAll (a,b,c) {
 return [f_concat(a, b), f_just_return(c)];
}


var result = concatAll(1, ' 2 ', { name: 'value' });


console.log(result);

