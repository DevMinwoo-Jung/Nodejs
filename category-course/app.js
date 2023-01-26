const path = require('path');
const os = require('os');
const fs = require('fs');
// get folders user want

// get params
const folder = process.argv[2];
const workingDir = path.join(__dirname, 'Pictures', folder);

console.log(workingDir);

if(!folder || fs.existsSync(workingDir)) {
  console.error('사진이나 폴더 이름이 없습니다.');
}

// make video, captured... folders
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// move files to matched folders