import { products } from './data/products/cardsData.js'
import express from 'express'
import cors from 'cors'
const app = express()
const port = 5000

app.use(express.json())
app.use(express.static('public'))

app.get('/api/products/all', cors(), (req, res) => {
  res.json(products)
})

app.get('/api/products/find', cors(), (req, res) => {
  const searchQuery = req.query.desc.replace(/"/g, '');
  const result = products.filter(el => el.description.includes(searchQuery));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
