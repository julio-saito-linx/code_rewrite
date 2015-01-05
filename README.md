code_rewrite
============

### test
```js
npm test
```

### test watch
```js
gulp
```

### filtering the test
```js
gulp --grep='filter'
```

### enabling debug
```js
CODE_REWRITE_DEBUG_LEVEL=debug gulp
```

## instrumentalizing code
```sh
echo '\n - instrumentalizing'
node examples/instrumentalize-code/start.js

echo '\n - calling f3 without consoles'
node examples/instrumentalize-code/source/codeToInstrumentalize.js

echo '\n - calling f3 with consoles'
node examples/instrumentalize-code/destination/codeInstrumentalized.js


# all together
node examples/instrumentalize-code/start.js; node examples/instrumentalize-code/source/codeToInstrumentalize.js; node examples/instrumentalize-code/destination/codeInstrumentalized.js
```
