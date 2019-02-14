const Blockchain = require('./Blockchain')

const chain = new Blockchain()

console.log('Mining block...')
chain.addBlock('This is block 1')

console.log('Mining block')
chain.addBlock('This is block 1')

console.log(JSON.stringify(chain, null, 4))
console.log('Is blockchain valid? ' + chain.isValid().toString())
