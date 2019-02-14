const Block = require('./Block')

class Blockchain {
  constructor() {
    this.chain = [new Block(0, 'Genesis block', 0)]
    this.difficulty = 4
  }

  addBlock(data) {
    const newBlock = new Block(
      this.chain.length + 1,
      data,
      this.getLastBlock().hash
    )

    newBlock.mineBlock(this.difficulty)

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

module.exports = Blockchain
