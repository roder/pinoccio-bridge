// combine bridge and serial event stream
var serial = require('./serial.js');

module.exports = function(com,readycb){
  var s = serial(com,function(err){
    if(err) return readycb(err);
    if(readycb) readycb(false,s);
  });

  return s;
}
