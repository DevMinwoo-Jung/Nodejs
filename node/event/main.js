const logger = require('./app2.js');
const emmiter = new logger.Logger();

emmiter.on('log', (evenet) => {
  console.log(evenet);
})

emmiter.log(() => {
  console.log('무언가를 하고 있당...');
})