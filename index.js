var ftdi = require('ftdi');

ftdi.find(0x0403, 0x6014, function(err, devices) {
  console.log(devices)
}); // returns all ftdi devices with
// matching vendor and product id