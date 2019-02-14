const Blockchain = require('./Blockchain')

const chain = new Blockchain()

for (let i = 1; i <= 10; i++) {
  console.log('Mining block...')
  chain.addBlock(`Block ${i} data`)
}

console.log(JSON.stringify(chain, null, 4))
console.log('Is blockchain valid? ' + chain.isValid().toString())
