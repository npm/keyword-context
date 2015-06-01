# keyword-context

Takes a body of text (like a readme) and a keyword, and returns sections of the document that include the keyword and contextual words around it.

## Usage

```js
var contexter = require('keyword-context');

var ctx = contexter(readme, 'keyword');

console.log(ctx); // a list of strings with the keyword in each
```

## License

ISC
