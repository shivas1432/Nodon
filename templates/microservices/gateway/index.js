import express from 'express'
import proxy from 'express-http-proxy'

const app = express()

app.use('/auth', proxy('http://localhost:4001'))
app.use('/users', proxy('http://localhost:4002'))

app.listen(4000, () => console.log('API Gateway running on port 4000'))
