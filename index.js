const app = require('express')()
const port = 3000

let date = new Date()

let currentTime = date.getHours() + ":" + date.getMinutes()

app.get('/', (req, res) => {
  res.send(`The time is: ${currentTime}`)
})

app.listen(port, () => {
  console.log(`${currentTime} | Example app listening at http://localhost:${port}`)
})