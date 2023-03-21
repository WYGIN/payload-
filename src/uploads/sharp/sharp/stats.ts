function stats(options, (err, stats) => {}) {
  return {};
}

module.exports = function (sharp) {
  Object.assign(sharp.prototype, {
    stats
  });
};
