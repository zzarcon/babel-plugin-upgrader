const fs = require('fs');
const plugin = require('./plugin');
const es5Code = fs.readFileSync('./code/es5.js', 'utf8');
const babel = require("babel-core");
const options = {
  // sourceType: "module",
  plugins: [plugin]
};
const result = babel.transform(es5Code, options);
const es6 = result.code;

fs.writeFileSync('./code/es6.js', es6);