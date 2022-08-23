
var libopus = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(libopus) {
  libopus = libopus || {};



  return libopus.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = libopus;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return libopus; });
else if (typeof exports === 'object')
  exports["libopus"] = libopus;