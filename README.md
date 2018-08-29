`semble` (as in assemble) is a helper module that allows one to easily layout strings in a grid for printing.

# API

```
const { semble } = require('semble');
const spiritualWords = semble([
  ['hello\ngoodbye', 'green\nblue\nred'],
  ['chocolate rain\nvanilla sky', 'foo']
]);
console.log(spiritualWords);
```

Output:
```
hello          green
goodbye        blue
               red

chocolate rain foo
vanilla sky
```
