'use strict'; 
  
 const sharp { Sharp } = import('./constructor'); 
// require('./input')(Sharp); 
 import('./resize').then(m => m(Sharp)); 
 //require('./composite')(Sharp); 
// require('./operation')(Sharp); 
 import('./colour').then(m => m(Sharp)); 
// require('./channel')(Sharp); 
 import('./output').then(m => m(Sharp)); 
// require('./utility')(Sharp); 
export Sharp;
 export default sharp;
