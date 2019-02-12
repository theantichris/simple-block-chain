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
    this.chain = [this.createGenesis()]
  }

  createGenesis() {
    const block = new Block(0, 'Genesis block', 0)

    return block
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLastBlock().hash

    this.chain.push(newBlock)
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        console.log('The current block has an invalid hash')
        console.log('Hash: ' + currentBlock.hash)
        console.log('Calculated: ' + currentBlock.calculateHash())

        return false
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        console.error('The previous block\'s hash doesn\'t match current block.')
        return false
      }

      return true
    }
  }
}

const chain = new Blockchain()
chain.addBlock(new Block(1, 'Second block'))

chain.isValid()
