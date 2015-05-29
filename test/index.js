var tap = require('tap');
var fixtures = require('./fixtures');
var contexter = require('../index.js');

tap.test('parses out lines that include the keyword', function (t) {
  var ctx = contexter(fixtures.npm, 'package');
  console.log(ctx)
  t.ok(Array.isArray(ctx), 'result is an array');
  t.equals(ctx.length, 5, 'result has 5 keyword instances');
  t.match(ctx[0], /package/, 'result includes keyword');
  t.end();
});