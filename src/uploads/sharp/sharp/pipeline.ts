function pipeline (options, callback) {
  
}

module.exports = function (sharp) {
  Object.assign(sharp.prototype, {
    pipeline
  });
};
