const Blockchain = require('./Blockchain')

const chain = new Blockchain()
chain.addBlock('Second block')

if (chain.isValid()) console.log('Chain is valid.')
else console.log('Chain is invalid')
