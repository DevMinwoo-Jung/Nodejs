var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../test/');

let result = getAllFiles(filePath);
console.log(result[0]); // IMG_1234.jpg
console.log(result[0].slice(result[0].indexOf('.') + 1)) // jpg
function getAllFiles(path) {
  let file = fs.readdirSync(path);
  return file;
};

function setFilterFileExtenstion(files, type) {
  let returnArr = [];
  console.log(files.filter((element) => element.slice(element.indexOf('.')+1) === type))
  returnArr = files.filter((element) => element.slice(element.indexOf('.')+1) === type);
}

console.log(setFilterFileExtenstion(result, 'png'));