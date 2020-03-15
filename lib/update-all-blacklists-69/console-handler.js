const controller = require('./controller');

return controller()
  .then(data => console.log('DONE', data))
  .catch(error => console.log('ERROR', error));
