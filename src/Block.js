var sha256 = require('crypto-js/sha256')

class Block {
  constructor(index, data, previousHash = '') {
    this.index = index
    this.data = data
    this.previousHash = previousHash

    this.timestamp = new Date().toString()
    this.nonce = 0

    this.hash = this.calculateHash()
  }

  calculateHash() {
    return sha256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString()
  }
}

module.exports = Block
