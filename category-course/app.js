const path = require('path');
const os = require('os');
const fs = require('fs');
// get folders user want

// get params
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'course', folder);
console.log(workingDir);
console.log(process.argv);

if(!folder || fs.existsSync(workingDir)) {
  console.error('사진이나 폴더 이름이 없습니다.');
}

// make video, captured... folders
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');
console.log(videoDir)
console.log(capturedDir)
console.log(duplicatedDir)

// fs.mkdirSync(videoDir);
// fs.mkdirSync(capturedDir);
// fs.mkdirSync(duplicatedDir);

!fs.existsSync(videoDir) && fs.mkdirSync('video');
!fs.existsSync(capturedDir) && fs.mkdirSync('captured');
!fs.existsSync(duplicatedDir) && fs.mkdirSync('duplicated');

// move files to matched folders