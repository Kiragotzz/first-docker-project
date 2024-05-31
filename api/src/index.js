const express = require('express')
const mysql = require('mysql2');

const app = express()

console.log('TESTE');

const connection = mysql.createConnection({
  // host: '172.17.0.2',
  host: 'mysql-container',
  user: 'root',
  password: 'programadorabordo',
  database: 'programadorabordo'
})

connection.connect();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/products', function (req, res) {
  console.log("/products")
  connection.query('SELECT * FROM products', function (error, results) {
    if (error) {
      throw error
    }

    res.send(results.map(e => ({ name: e.name, price: e.price })))
  })
})

app.listen(9001, function () {
  console.log('LISTENING ON PORT 9001');
})