var fs = require('fs');
var fsPromise = require('fs').promises; 
var path = require('path');
var filePath = path.join(__dirname, '../test/');

let result = getAllFiles(filePath);


function getAllFiles(path) {
  let file = fs.readdirSync(path);
  return file;
};

// 파일별로 폴더 만들기
function getFolders() {
  let allFIles = getAllFiles(filePath);
  let folderCategory = new Set();
  allFIles
  .map((element) => element.slice(element.indexOf('.') + 1))
  .map((element) => folderCategory.add(element))
  return folderCategory;
}

let folders = [...getFolders()];

folders.map((element) => {
  makeFolder(`${element}`)
})

function makeFolder(category) {
  fsPromise.mkdir(category)
  .catch(console.error);
}

// 폴더별로 파일 옮기기

function setFilterFileExtenstion(files, type) {
  let returnArr = [];
  console.log(files.filter((element) => element.slice(element.indexOf('.')+1) === type))
  returnArr = files.filter((element) => element.slice(element.indexOf('.')+1) === type);
}

// console.log(setFilterFileExtenstion(result, 'png'));