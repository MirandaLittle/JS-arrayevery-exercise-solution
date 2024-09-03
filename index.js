'use strict';

// JS every() solution

const guestList = require('./mockData.js').data;

const adultYear = new Date().getFullYear() - 18;

const allAdult = guestList.every(({ birth_year }) => birth_year <= adultYear);

console.log(allAdult);