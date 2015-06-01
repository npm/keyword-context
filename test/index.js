var tap = require('tap');
var fixtures = require('./fixtures');
var contexter = require('../index.js');

tap.test('parses out lines that include the keyword', function (t) {
  var ctx = contexter(fixtures.npm, 'package');
  t.ok(Array.isArray(ctx), 'result is an array');
  t.equal(ctx.length, 5, 'result has 5 keyword instances');
  ctx.forEach(function (c, i) {
    t.match(c, /package/, i + 'th result includes keyword');
    t.ok(c.split(' ').length <= 20, 'result has no more than 20 words');
  });
  t.end();
});