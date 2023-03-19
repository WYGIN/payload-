
function format() {
  return {};
}
function libvipsVersion() {
  return '';
}
function cache(options) {
  return {};
}
function cache(memory, files, items) {
  return {};
}
function concurrency () {
  return 0;
}
function concurrency (concurrency) {
  return 0;
}
function counters() {
  return {};
}
function simd() {
  return true;
}
function simd(simd) {
  return simd;
}
function _isUsingJemalloc() {
  return false;
}

module.export = function (sharp) {
  sharp.format = format;
  sharp.libvipsVersion = libvipsVersion;
  sharp.cache = cache;
  sharp.concurrency = concurrency;
  sharp.counters = counters;
  sharp.simd = simd;
  sharp._isUsingJemalloc = _isUsingJemalloc;
}
