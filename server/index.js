const express = require ('express');
const app = express();
const port = 3002;

app.use(express.static('../client/dist'));

app.get('/', (req, res) => {
  console.log('received at /')
  res.send('Hi :)');
})

app.listen(port, () => {
  console.log(`Server is up and listening on port: ${port}`)
})