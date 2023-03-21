import('./common');
import is from '../is';

function metadata(options, (err, metadata) => {
  return {};
}) {
  return {};
}



module.exports = function(sharp) {
  Object.assign(sharp.prototype, {
    metadata

  });
}
