var fs = require('co-fs');
var co = require('co');

console.log('before');
co(function* () {
    var data = yield fs.readFile('./data1.json', 'utf-8');
    console.log(data);
});
console.log('after');
