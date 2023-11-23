const fs = require("fs");
const http = require("http");

const rpsJS = fs.readFileSync("./js/rps.js");
const msgJS = fs.readFileSync("./js/msgMxr.js");

const style = fs.readFileSync("./css/style.css");
const homePage = fs.readFileSync("./index.html");
const rpsPage = fs.readFileSync("./html/rps.html");
const msgPage = fs.readFileSync("./html/msgMxr.html");

// Images
const rock = fs.readFileSync("./img/rock.png");
const paper = fs.readFileSync("./img/paper.png");
const scissors = fs.readFileSync("./img/scissors.png");

const server = http.createServer((req, res) => {
  const url = req.url;
  //console.log(url);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/css/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    res.end();
  } 
  
  else if (url === "/rps") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(rpsPage);
    res.end();
  }else if (url === "/js/rps.js") {
    res.writeHead(200, { "content-type": "text/js" });
    res.write(rpsJS);
    res.end();
  }else if (url === "/img/rock.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(rock);
    res.end();
  }else if (url === "/img/paper.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(paper);
    res.end();
  }else if (url === "/img/scissors.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(scissors);
    res.end();
  }
  
  else if (url === "/msg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(msgPage);
    res.end();
  }else if (url === "/js/msgMxr.js") {
    res.writeHead(200, { "content-type": "text/js" });
    res.write(msgJS);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
    res.end();
  }
});

server.listen(8000, () => {
  console.log(`Server is listening at port 8000`);
});
