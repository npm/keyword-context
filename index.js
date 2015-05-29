var _ = require('lodash');
var CTX_WORDS = 10;

module.exports = function (text, keyword) {

  var lines = text.split('\n');
  var ctx = [];
  lines.forEach(function (l) {

    var words = l.trim().split(' ');
    var index = _.indexOf(words, keyword);

    if (index !== -1) {

      var start = (index-CTX_WORDS < 0) ? 0 : index-CTX_WORDS;
      var end = (index+CTX_WORDS < words.length) ? index+CTX_WORDS : words.length;
      var context = words.slice(start, end);

      ctx.push(context.join(' ').replace(keyword, '_'+keyword+'_'));
    }
  });

  return ctx;
};