const path = require("path");

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
