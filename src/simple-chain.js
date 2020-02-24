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
    if (position - 1 < 0 || this.chain.length < position || !(typeof position === 'number')){
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position -1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
