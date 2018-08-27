const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hey, I\'m a Node.js app! -jkordy')
})

app.get('/hello', (req, res) => {
    res.send('Hello, I\'m a Node.js app!')
})

app.get('/goodbye', (req, res) => {
    res.send('Bye!')
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})
