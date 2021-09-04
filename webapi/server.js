var express = require('express')
var cors = require('cors');
var app = express();
app.use(cors());
/* your regular routes go here */
 
app.get('/', function (req, res) {
  res.json([
    {username:'Salah'},
    {username:'Hadi'},
    {username:'Amal'},
    {username:'Rim'}
  ])
})
 
app.listen(3000)