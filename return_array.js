function getMaxMin(...num) {
    return [Math.max(...num), Math.min(...num)];
}
let result = getMaxMin(1,2,38,4,8,5,7,0,10,-23);
console.log(result);
let [max, min] = getMaxMin(1,2,38,4,8,5,7,0,10,-23);
console.log("max: " + max);
console.log("min: " + min);

// function returnMaltipleValues() {
//     return [1, 2];
// }

// var [t1, t2] = returnMaltipleValues()
// console.log(t1,t2);