

const http = require('http')
const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = "debug";
const  server = http.createServer((request, response) => {
  const path = request.url.substr(1);
  let data = '';
  response.writeHead(200, {
    "content-type": "application/json,charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  });
  http.get(`https://m.lagou.com/listmore.json${path}`, (res) => {
    res.on('data', (chunk) => {
      data += chunk;
    })
    res.on('end', () => {
      response.end(JSON.stringify({
        ret: true,
        data
      }))
    })
  })
})

logger.debug(1111)

server.listen(8000,()=>{
  logger.debug('服务启动')
})
