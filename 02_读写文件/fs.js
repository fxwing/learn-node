const fs = require('fs')
fs.writeFile('./log.txt', 'hello', (err, data) => {
  if (!err) console.log('文件读写成功');
})
