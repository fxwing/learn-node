
// 简单的node请求别的接口
const http = require('http')
// https.get('https://www.baidu.com/s?ie=utf-8&newi=1&mod=1&isbd=1&isid=f547a08c0009415c&wd=dva%20%20%E6%B3%A8%E5%86%8C%E5%A4%9A%E4%B8%AAmodal&rsv_spt=1&rsv_iqid=0xb7274e7400162f53&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=0&rsv_dl=tb&oq=dva%2520%25E6%25B3%25A8%25E5%2586%258C%25E5%25A4%259A%25E4%25B8%25AAmodal&rsv_btype=t&inputT=4531&rsv_t=98ca5ebJtLILAjlFzIUC93f7zxiFSU7VUZnPw6zEL6JO2qNJX8nKx19fix%2F4iotf4vDs&rsv_sug3=26&rsv_pq=f547a08c0009415c&rsv_sug4=6952&bs=dva%20%E6%B3%A8%E5%86%8C%E5%A4%9A%E4%B8%AAmodal&rsv_sid=33507_33272_31253_33595_33570_33675_33392_33601_33714_22159&_ss=1&clist=&hsug=&f4s=1&csor=14&_cr1=45734', res => {
//   let str = '';
//   res.on('data', (chunk) => {
//     str = chunk;
//   });
//   res.on('end', () => {
//     console.log(str);
//   })
// })

// 创建简单的服务
const serve = http.createServer((request, response) => {
  console.log(request);
  response.write('111');
  response.end();
});
serve.listen(8090, 'localhost', (err, data) => {
  console.log('服务创建成功')
})




