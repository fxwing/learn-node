const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  switch (req.url) {
    case "/api/data":
      res.write("hello1");
      break;
    default:
      res.write("page not  found");
      break;
  }
  res.end();
});

server.listen(8080, "localhost", (err, data) => {
  console.log("localhost:8080,服务器启动");
});
