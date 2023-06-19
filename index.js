import { products } from './data/products/cardsData.js'
import express from 'express'
const app = express()
const port = 5000

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
