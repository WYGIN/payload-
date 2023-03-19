import('./common');
import is from '../is';

function metadata(options, function(err, metadata) => {
  
}) {
  
}

function stats(options, function(err, stats) => {}) {}

module.exports = function(sharp) {
  Object.assign(sharp.prototype, {
    metadata,
    stats
  });
}
