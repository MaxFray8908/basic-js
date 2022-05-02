const { DepthCalculator } = require('./recursive-depth.js');


const depthCalc = new DepthCalculator();

// depthCalc.calculateDepth([1, 2, 3, 4, 5])


console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));

