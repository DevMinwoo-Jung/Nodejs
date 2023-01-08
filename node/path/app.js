const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

console.log(path.extname(__filename));

const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute?

console.log('isAbsolute', path.isAbsolute(__dirname));

console.log('isAbsolute', path.isAbsolute('../'));

console.log(path.normalize('./folder////////sub'));

console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));

