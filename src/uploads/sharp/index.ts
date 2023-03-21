'use strict'; 
  
 const Sharp = require('./constructor'); 
// require('./input')(Sharp); 
 import('./resize').then(m => m(Sharp)); 
 //require('./composite')(Sharp); 
// require('./operation')(Sharp); 
 import('./colour').then(m => m(Sharp)); 
// require('./channel')(Sharp); 
 import('./output').then(m => m(Sharp)); 
// require('./utility')(Sharp); 
  
 export default Sharp;
