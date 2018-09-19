const express = require('express')
const app = express()

const simpleChain = require('./simpleChain');
let blockchain = new simpleChain.Blockchain();

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/block/([0-9]*)', function (req, res) {
    console.log(blockchain.getBlock(0))
    res.setHeader('Content-Type', 'application/json');
    res.send(blockchain.getBlock(0)+1)
  })

app.post('/block', function (req, res) {
  res.send('Got a POST request')
})

app.listen(8000, function(){
    console.log('Example app listening on port 8000!')
})
