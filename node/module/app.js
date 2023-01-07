import { add } from './counter';
import { getCount } from './counter';
// 위는 최신 밑은 예전꺼
const counter = require('./counter');

console.log(counter.getCount());
counter.add();
counter.add();
console.log(counter.getCount());
console.log(module);
