'use strict'; 
  
 import sharp, { Sharp } from './constructor'; 
// require('./input')(Sharp); 
 import resize from './resize';
 resize(Sharp);
 //require('./composite')(Sharp); 
// require('./operation')(Sharp); 
 import color from './colour';
 color(Sharp);
// require('./channel')(Sharp); 
 import output from './output';
 output(Sharp);
// require('./utility')(Sharp); 
export const Sharp;
 export default sharp;
