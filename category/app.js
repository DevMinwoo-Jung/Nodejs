var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '../test/');

let asd = getAllFiles(filePath);

console.log(asd);

function getAllFiles(filePath) {
  let fileArray = [];
  fs.readdir(filePath, {encoding: 'utf-8'}, function(err,data){
      if (!err) {
          // console.log(data);
          data.map((element) => fileArray.push(element));
          fileArray = data;
      } else {
          console.log(err);
      }
  });
  console.log(`fileArray: ${fileArray}`)
  return fileArray;
};

function setFilterFileExtenstion(files, type) {
  let returnArr = [];
  
}