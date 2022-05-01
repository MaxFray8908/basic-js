const { transform } = require('./transform-array.js');





console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));