const express = require('express')
const product = require("./backend/api/product")
const app = express()

const port = process.env.port || 5000

app.use("/backend/api/product", product)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
