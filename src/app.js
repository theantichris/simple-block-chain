import sha256 from 'crypto-js'

class Block {
  constructor(index, data, previousHash = '') {
    this.index = index
    this.data = data
    this.previousHash = previousHash

    this.timestamp = new Date().toString()
    this.nonce = 0

    this.hash = this.calculateHash
  }

  calculateHash() {
    const jsonData = JSON.stringify(this.data)

    return sha256(
      this.index + this.previousHash + this.timestamp + jsonData + this.nonce
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
}

const isValidChain = () => {
  for (let i = 1; i < this.chain.length; i++) {
    const currentBlock = this.chain[i]
    const previousBlock = this.chain[i - 1]

    if (currentBlock.hash !== currentBlock.calculateHash()) return false

    if (currentBlock.previousHash !== previousBlock.hash) return false

    return true
  }
}
