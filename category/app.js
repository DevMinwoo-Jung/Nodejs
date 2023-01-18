var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../test/');

let asd = getAllFiles(filePath);

console.log(asd);

function getAllFiles(path) {
  let file = fs.readdirSync(path);
  return file;
};

function setFilterFileExtenstion(files, type) {
  let returnArr = [];
  
}