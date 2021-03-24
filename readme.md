### 记录
1. npm init -y -y的意思是一切yes
2. npm  list  查看所有包的依赖关系
3. 写再命令行中`"test-gulp":"gulp -v"`  就会从当前目录下查找
4. `npm  install --production`只装生产环境的包
5. 版本符号：
    - ^锁定大版本
    - ~锁定中间版本
    - 没有符号锁定全部版本
    - *最新版本
6. 发布到npm官网  执行 `npm adduser` 输入账号密码邮箱  执行 `npm publish`
     - 有一个坑  新注册的需要点击邮箱确认 否则publish403
7. 卸载包  npm  unpublish --force
8. scripts 脚本中的语言规则
    - `&` 串行不确定执行顺序  `&&`并行前后执行
    - `start` `test` 可以简写=> `npm  run  start`  `npm run test`
    - 在js文件中获取`package.json`中的变量
    ```js
    // package.json
    {
        "customVar":{
            "name":"fxwing"
        }
    }
    // script.js
    console.log(process.env.npm_package_customVar_name)
    ```
    - 在`package.json`当前文件中访问的需要`echo $npm_package_customVar_name`但是只在bash中生效
    - cross-env 设置环境变量`cross-env NODE_ENV=production npm run runjs`


