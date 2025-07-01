import express from 'express'
const app = express()

app.get('/auth/health', (req, res) => {
  res.send({ status: 'Auth Service Healthy' })
})

app.listen(4001, () => console.log('Auth Service running on port 4001'))
