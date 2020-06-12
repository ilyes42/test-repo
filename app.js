const express = require('express')
const app = express()
const port = 3000
const birds = require('./birds')

app.use('/birds', birds)

app.get('/', (req, res) => res.send('App home page'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))