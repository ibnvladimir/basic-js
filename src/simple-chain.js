const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof(position) !== 'number' || position < 1 || position > this.chain.length){
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let tempChain = this.chain;
    this.chain = []
    return tempChain.join('~~');
  }
};

module.exports = chainMaker;