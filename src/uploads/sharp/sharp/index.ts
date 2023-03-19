const sharp = import('./common');
import('./metadata').then(m => m(sharp));
import('./pipeline').then(m => m(sharp));
import('./utilities').then(m => m(sharp));
import('./stats').then(m => m(sharp));

module.exports = sharp;
