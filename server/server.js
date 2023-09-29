const express = require('express')
const app = express()
const port = 8000

app.get('/api', (req, res) => {
  // res.send('Hello World!')
  res.json({ message: "Hello from my server!" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})