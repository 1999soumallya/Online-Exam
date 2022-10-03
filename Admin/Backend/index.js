const connectToMongo = require('./db')
const cors = require('cors')

connectToMongo();
const express = require('express');
const app = express()
const port = 9000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

