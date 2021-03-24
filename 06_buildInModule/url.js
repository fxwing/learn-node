// @ts-ignore
const url = require('url');
const querystring  = require('querystring')


const urlString = 'http://www.baidu.com?name=1&age=2'

// console.log(url.parse(urlString));

const obj = {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=1&age=2',
  query: 'name=1&age=我',
  pathname: '/',
  path: '/?name=1&age=2',
  href: 'http://www.baidu.com/?name=1&age=2'
}
const queryObj = querystring.parse(obj.query);
const queryStr = querystring.stringify(queryObj);
// 转义
const queryEscape = querystring.escape(queryStr) // 'name%3D1%26age%3D2'
//反转义
const queryUnescape = querystring.unescape(queryEscape)
console.log(queryObj, queryStr, queryEscape, queryUnescape);


// console.log(url.format(obj));

var a = url.resolve('/one/two/three', 'four')
var b = url.resolve('http://example.com/', '/one')
var c = url.resolve('http://example.com/one', '/two')
// console.log(a + "," + b + "," + c)


