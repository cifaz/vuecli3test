# 脚手架

## 环境配置
```
.env 总环境配置, 会和其它环境文件进行合并, 相同配置以环境配置为准
.env.development    开发环境
.env.test           测试环境
.env.preprod        预发布
.env.production     生产环境

如果是本地特殊的配置或自己的配置, 请不要在这几个环境进行修改,  
复制一个文件, 如.env.test.local 这个文件不会上传到GIT

```

## 项目安装依赖, 第一次项目时必须安装
```
依赖安装
yarn install

scss环境安装
http://rubyinstaller.org/downloads/ 
下载WITHOUT DEVKIT版本 如Ruby 2.4.4-2 (x64) 
一路点击安装
打开cmd，输入gem install sass就可以安装SASS了
如果下载慢, 可以切换下载源, 再次安装
依次输入：
gem sources –r http://rubygems.org/
gem sources –a http://ruby.taobao.org/
gem sources –l

然后在webstorm里可以配置识别目录了
settings > tools > File Watcher > scss > 编辑 > Program 地址为:安装目录\bin\sass.bat 如D:\app\Ruby24-x64\bin\sass.bat

```

### 本地调试
```
yarn run serve | yarn serve | npm run serve
启动时可临时增加参数 和.env.development中同样 
--host -port --open

vue插件vue-tools 支持chrome
[vue-tool](doc/vuetools.crx)
拖到浏览器添加后, 重启后即可使用
```

### 打包测试,预发布,生产包
```
yarn run build
要打指定环境的包时, 使用 --mode test(环境名称), 如
yarn run build --mode test
```

### 运行测试
```
yarn run test:unit
```

### 运行界面测试
```
yarn run test:e2e
```

### 样式使用
```
单个vue组件要引用自己的样式时, 在vue中写入如下的话
<style lang="scss">
  @import "about.scss";
</style>

如果是全局样式, 则在main.js中用import或require引入, 如import "./assets/css/base.scss";
```

### 模拟数据
```
先找一个你想存数据的地方, 我的: E:\project\nodejs\jsonserver
数据文件位于: doc/db.json
打开CMD或powershell
npm init -y 初始化项目
npm install json-server
编辑package.json 在script下增加此行 "start": "json-server --port 4000 --watch db.json"
建立数据目录, 为json结构如 {news:[{title:"新闻1", "readCount": 343}]} 注:文件保存是保存为utf-8
npm start 启动就可以了, 看控制台, 复制一个URL试试, 支持增删改查

```
