const express = require ('express');
const app = express();
const port = 3092;

app.use(express.static('/Users/ashleyreischman/HackReactor/revengeMVP/client/dist'));
console.log(__dirname);

app.get('/', (req, res) => {
  console.log('received at /')
})

app.listen(port, () => {
  console.log(`Server is up and listening on port: ${port}`)
})