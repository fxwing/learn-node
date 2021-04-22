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
9. npx
    <strong>作用</strong>
    先在本地查找没有 去全局
    1. npx机制是在终端调用项目内部安装的模块 `node_modules/.bin/`文件下
    2. 可以避免全局安装模块
    3. `npx --no-install http-serve` 不安装使用本地模块  只能使用本地或者全局的 没有花报错
    4. `npx --ignore-existing http-server` 忽略已经存在的模块   使用线上最新的
10. commonjs模块导出和引入 浏览器不支持
    1. `module.exports ={}` 页面只能有一个 `exports.say = say`
    2. 引入 `const a = require('')`
11. commonjs和ES6 module 区别
    - commonjs 引入和导出都可以写在判断里面,es6 module不可以
    - commonjs 修改导出模块的数据,不影响当前模块，es6 module 会影响
    ```js
    if (true) {
        const { name, obj } = require('./name')
        console.log(name);
        obj.key = 2
        console.log(obj)
    }
    ```
    1. commonjs
    ```js
    // 为值的拷贝 修改数据 当前不会影响
    // name.js
        let name = 'name'
        // console.log('name.js');
        exports.name = name;
        exports.changeName=function() {
            name = 'name1'
        }
    ```
    ```js
    //app.js
    if (true) {
        const { name,changeName } = require('./name.js')
        console.log(name); // name
        changeName()
        console.log(name) //name
    }
    // this 指向当前模块
    console.log(this); // {}
    ```
    1. es6 module
        ```ts
        // app.ts
        import changeName, {name} from './test_module'
        console.log(name);// name
        changeName();
        console.log(name); // name1
        ```
        ```ts
        //test_module.js
        export let name: string = 'name';
        export default function changeName() {
            name = 'name1';
        }
        ```


