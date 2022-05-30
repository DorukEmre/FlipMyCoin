const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    let flipRes = Math.ceil(Math.random() * 2) === 1 ? 'Heads' : 'Tails'
    if(flipRes == 'Heads'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        name: flipRes,
        image: '/assets/Heads-Coin_of_Julius_Caesar_Sacred_Palladium.jpg',
        imageAlt: "Heads side of coin"
      }
      res.end(JSON.stringify(objToJson));
    }//student = leon
    else if(flipRes == 'Tails'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        name: flipRes,
        image: '/assets/Tails-Coin_of_Julius_Caesar_Sacred_Palladium.jpg',
        imageAlt: "Tails side of coin"
      }
      res.end(JSON.stringify(objToJson));
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/assets/Heads-Coin_of_Julius_Caesar_Sacred_Palladium.jpg'){
    fs.readFile('./assets/Heads-Coin_of_Julius_Caesar_Sacred_Palladium.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg' });
       res.write(data);
      res.end();
    });
  }
  else if (page == '/assets/Tails-Coin_of_Julius_Caesar_Sacred_Palladium.jpg'){
    fs.readFile('./assets/Tails-Coin_of_Julius_Caesar_Sacred_Palladium.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg' });
       res.write(data);
      res.end();
    });
  }
  else{
  
  }
});

server.listen(process.env.PORT || 5000)
