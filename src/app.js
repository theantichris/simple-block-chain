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

class Blockchain {
  constructor() {
    this.chain = [new Block(0, 'Genesis block', 0)]
  }

  addBlock(data) {
    const newBlock = new Block(
      this.chain.length + 1,
      data,
      this.getLastBlock().hash
    )

    this.chain.push(newBlock)
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1]
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        console.error('Block ' + i + ' has an invalid hash')
        console.error('Hash: ' + currentBlock.hash)
        console.error('Calculated: ' + currentBlock.calculateHash())

        return false
      }

      const previousBlock = this.chain[i - 1]

      if (currentBlock.previousHash !== previousBlock.hash) {
        console.error()

        return false
      }

      return true
    }
  }
}

const chain = new Blockchain()
chain.addBlock('Second block')

chain.isValid()
