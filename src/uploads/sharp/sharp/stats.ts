function stats(options, function(err, stats) => {}) {
  return {};
}

module.exports = function (sharp) {
  Object.assign(sharp.prototype, {
    stats
  });
};
