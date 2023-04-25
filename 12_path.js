const path = require("path");

// 路径变量
// __dirname：获取文件夹路径
console.log("__dirname:", __dirname); // D:\code\demos\node-test
// __filename：获取文件路径
console.log("__filename:", __filename); // D:\code\demos\node-test\15.js

// 拼接路径
const str = path.join(__dirname, "views", "view.html"); // 如果不希望自己手动处理 / 的问题，使用 path.join
console.log(str); // D:\code\demos\node-test\views\view.html

var cache = {};

function store(key, value) {
  cache[path.normalize(key)] = value;
}

store("foo/bar", 1);
store("foo//baz//../bar", 2);
// console.log(cache); // => { "foo/bar": 2 }

// 坑出没注意： 标准化之后的路径里的斜杠在Windows系统下是\，而在Linux系统下是/。
// 如果想保证任何系统下都使用 / 作为路径分隔符的话，需要用.replace(/\\/g, '/')再替换一下标准路径。

const path1 = path.normalize("foo/bar");
console.log(path1); // foo\bar

const path2 = path.normalize("foo//baz//../bar");
console.log(path2); // foo\bar

const path3 = path.join("foo/", "baz/", "../bar");
console.log(path3); // foo\bar
