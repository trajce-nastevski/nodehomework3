const express = require('express')
const app = express()
const port = 3000

var indexRouter = require('./routes/index');
var inputRouter = require('./routes/input');

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.use('/', indexRouter);
app.use('/input', inputRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})