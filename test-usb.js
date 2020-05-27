const usb = require('usb')

const ft323h = usb.findByIds(0x0403,0x6014)

console.log(ft323h)