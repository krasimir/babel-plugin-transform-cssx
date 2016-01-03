'use strict';

require('better-log/install');

module.exports = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      Program: function Program(path, file) {
        path.unshiftContainer('body', t.expressionStatement(t.stringLiteral('use helloworld')));
      }
    }
  };
};