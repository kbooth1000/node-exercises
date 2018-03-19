const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://' });
    }
}

// var log = function(emitter){
//      // Raise an event
//     return emitter;
// }


module.exports = Logger;