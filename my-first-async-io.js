var fs = require('fs'); 

var content = fs.readFile(process.argv[2],function(err,data){ 
    if(err){
        console.log('error');
    }
    var lines=data.toString().split('\n');
    console.log(lines.length-1);
});