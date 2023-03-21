import('./common');
import is from '../is';

function metadata(options, callback: (err, metadata) => {
  
}) {
  return {};
}



module.exports = function(sharp) {
  Object.assign(sharp.prototype, {
    metadata

  });
}
