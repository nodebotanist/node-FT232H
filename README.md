# FT232H Module

Controls the FTDI 232H Module using Node.JS

A library to control the [Adafruit FT232H board](https://www.adafruit.com/products/2264?gclid=CKrzydKGidACFZaMaQoduLgHHg) with Node

Super-duper hat-tip to Adafruit for providing [a python library](https://github.com/adafruit/Adafruit_Python_GPIO/blob/master/Adafruit_GPIO/FT232H.py) for me to reverse-engineer.

I also have a link to [the datasheet](https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT232H.pdf).

## Status

Working on Windows and WSL 1 support

**This doesn't do much yet and is under active rigorous development.**

## Roadmap

* connect to device
* initialize device
* Write better docs/setup guide
* read GPIO states
* Write to GPIO
* I2C