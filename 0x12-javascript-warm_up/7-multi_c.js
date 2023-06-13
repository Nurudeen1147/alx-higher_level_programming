#!/usr/bin/node

const { argv } = require('process');
const num = parseInt(argv[2]);
const printC = (qty) => {
  for (;qty > 0; qty--) console.log('C is fun');
};

Number.isInteger(num) ? printC(num) : console.log('Missing number of occurrences');
