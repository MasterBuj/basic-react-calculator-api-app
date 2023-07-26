
import express from 'express';
import { all, create } from "mathjs";

const app = express()
const math = create(all)

app.use(express.json())

app.get('/api/v1', (req, res) => {
  res.send("API")
})

app.post('/api/v1/calculate', (req, res) => {
  // res.json({ message: "error" })
  // const math = req.query.id
  // const math = req.body 
  const { expression } = req.body;
  try {
    const evalResult = math.evaluate(expression);
    res.json({ result: evalResult })
  } catch (error) {
    res.json({ error: "invalid expression" })
  }

})

app.listen(8080, () => {
  console.log('Listening on port 8080')
}) 