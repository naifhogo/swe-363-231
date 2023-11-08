const customEmitter = require('./eventEmitter');

function simulateUserLogin() {
  const userId = Math.floor(Math.random() * 1000) + 1;
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}

function startSimulation() {
  setInterval(simulateUserLogin, Math.random() * (2000 - 100) + 100);
}

customEmitter.on('userLoggedIn', startSimulation);

customEmitter.on('userLoggedOut', () => {
  console.log('User logged out. Simulation stopped.');
  process.exit(0);
});

console.log('Waiting for user login event...');
customEmitter.emit('userLoggedIn');// this is to trigger the functions above when we run the node programe


setTimeout(() => {
  customEmitter.emit('userLoggedOut');
}, 5000); 