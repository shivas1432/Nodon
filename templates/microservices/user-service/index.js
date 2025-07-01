import express from 'express'
const app = express()

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }])
})

app.listen(4002, () => console.log('User Service running on port 4002'))
