// node 内置模块 url
/**
 * 介绍的方法
 */

const url = require("url");
const logger = require("../utils/log");

const urlString = "https://www.baidu.com:443/path/index.html?id=2&tag=3";
// 解析  url字符串  -> url 对象
// logger.debug(url.parse(urlString));

// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com:443',
//   port: '443',
//   hostname: 'www.baidu.com',
//   hash: '#tag=3',
//   search: '?id=2',
//   query: 'id=2',
//   pathname: '/path/index.html',
//   path: '/path/index.html?id=2',
//   href: 'https://www.baidu.com:443/path/index.html?id=2&tag=3' }

const urlObj = {
  protocol: "https:",
  slashes: true,
  auth: null,
  host: "www.baidu.com:443",
  port: "443",
  hostname: "www.baidu.com",
  hash: "#tag=3",
  search: "?id=2",
  query: "id=2",
  pathname: "/path/index.html",
  path: "/path/index.html?id=2",
  href: "https://www.baidu.com:443/path/index.html?id=2#tag=3",
};

// 将url对象转化为字符串
// logger.debug(url.format(urlObj));
// https://www.baidu.com:443/path/index.html?id=2#tag=3

// resolve  拼接url的路径

//logger.debug(url.resolve("https://www.baidu.com:443/path",'/index.html'));
// https://www.baidu.com:443/index.html
//logger.debug(url.resolve("https://www.baidu.com:443/path/",'index.html'));
// https://www.baidu.com:443/path/index.html
// logger.debug(3,url.resolve("https://www.baidu.com:443/path/",'./index.html'));
// 'https://www.baidu.com:443/path/index.html'
// logger.debug(3,url.resolve("https://www.baidu.com:443/path",'index.html'));
//'https://www.baidu.com:443/index.html'
// const  urlIns = new URL('https://www.baidu.com:443/path/index.html?id=2&tag=3')
// const  searchParams = urlIns.searchParams;
// logger.debug(searchParams.get('tag')); // 3
const urlIns = new url.URLSearchParams("?id=2&tag=3");
logger.debug(111,urlIns.get("tag")); // 3