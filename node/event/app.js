const EventEmitter = require('events');
const emitter = new EventEmitter();
// 개발자가 이벤트를 만들 수 있다.

const callback1 = (args) => {
  console.log('first callback - ' , args)
}

emitter.on('ellie', (args) => {
  console.log('first callback - ', args);
})

emitter.on('minwoo', callback1);

emitter.on('minwoo', (args) => {
  console.log('second callback - ', args);
});


emitter.emit('ellie', { message: 1});
emitter.emit('minwoo', { message: 'minwoo'});