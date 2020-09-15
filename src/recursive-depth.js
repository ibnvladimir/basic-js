module.exports = class DepthCalculator {

  calculateDepth(arr) {
    
    if (arr.some(i => Array.isArray(i))) {
      return 1 + this.calculateDepth(arr.flat());
    }
    return 1;

  }


};