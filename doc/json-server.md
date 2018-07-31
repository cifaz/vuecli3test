安装完成后可以用 json-server -h 命令检查是否安装成功，成功后会出现
json-server [options] <source>

选项：
  --config, -c       Path to config file            [默认值: "json-server.json"]
  --port, -p         Set port                                     [默认值: 3000]
  --host, -H         Set host                                [默认值: "0.0.0.0"]
  --watch, -w        Watch file(s)                                        [布尔]
  --routes, -r       Path to routes file
  --static, -s       Set static files directory
  --read-only, --ro  Allow only GET requests                              [布尔]
  --no-cors, --nc    Disable Cross-Origin Resource Sharing                [布尔]
  --no-gzip, --ng    Disable GZIP Content-Encoding                        [布尔]
  --snapshots, -S    Set snapshots directory                       [默认值: "."]
  --delay, -d        Add delay to responses (ms)
  --id, -i           Set database id property (e.g. _id)          [默认值: "id"]
  --quiet, -q        Suppress log messages from output                    [布尔]
  --help, -h         显示帮助信息                                         [布尔]
  --version, -v      显示版本号                                           [布尔]

示例：
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json

[教程1](https://blog.csdn.net/weixin_41578487/article/details/79455603)
[教程2](https://www.cnblogs.com/itfantasy/p/6043111.html)

https://github.com/typicode/json-server


