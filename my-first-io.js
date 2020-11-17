var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var arr=file.toString().split('\n');
console.log(arr.length - 1);
