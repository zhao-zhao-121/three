const path =require('path');
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__dirname));
console.log(path.dirname(__dirname));
console.log(path.extname(__dirname));


console.log(path.join("a","b","c"));

console.log(path.resolve("./a","../b","c"));


console.log(path.resolve("/a","b","c"));