var path = require('path');
//return dd.html
console.log(path.basename('./dd/dd.html'));
//return dd
console.log(path.basename('./dd/dd.html', '.html'));

console.log('-------------------------------------');
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));


console.log('-------------------------------------');
console.log(path.dirname('/foo/bar/baz/asdf/quux'));

console.log('-------------------------------------');
var pathstr  = path.format({
    root : "C:\\",
    dir : "C:\\path\\dir",
    base : "file.txt",
    ext : ".txt",
    name : "file"
});
console.log(pathstr);
console.log('-------------------------------------');
var joinstr = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(joinstr);
var joinstr = path.join('/foo', 'bar', 'asdf', 'quux', '.');
console.log(joinstr);

var joinstr = path.join('');
console.log(joinstr);
var joinstr = path.join('/foo', 'bar', '/baz/asdf', 'quux');
console.log(joinstr);
console.log('-------------------------------------');
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));


console.log('-------------------------------------');
var resolve = path.resolve('/foo/bar', './baz')
console.log(resolve);
var resolve = path.resolve('a');
console.log(resolve);



