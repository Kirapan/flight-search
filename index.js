require('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const path = require('path');
const bodyParser = require('body-parser');
const app = express()

app.set('env', process.env['APP_ENV'] || 'development')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

let data = require('./data/provider-data.js')

function searchFlights(from, to) {
  from = from.toUpperCase()
  to = to.toUpperCase()
  const result = data.filter(item => {
    if (item.Origin === from && item.Destination === to) {
      return item
    }
  })
  result.sort(function(a,b){
    if (a.Price !== b.Price) {
      return Number(a.Price.slice(1)) - Number(b.Price.slice(1))
    } else {
      let timeA = new Date(a['Departure Time'])
      let timeB = new Date(b['Departure Time'])
  
      console.log("timemememe", timeA)
      console.log("timemememe", timeB)
      return timeA - timeB
    }
  })
  return result
}

app.get('/searchFlights', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

app.get('/searchFlights/:Origin/:Destination', function (req, res) {
  let data = searchFlights(req.params.Origin, req.params.Destination)
  let tempVal = {
    data: data,
    origin: (req.params.Origin).toUpperCase(),
    destination: (req.params.Destination).toUpperCase()
  }
  res.render('result', tempVal)
})

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

