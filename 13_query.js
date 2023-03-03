// querystring模块用于实现URL参数字符串与参数对象的互相转换
const querystring = require("querystring");

const params = querystring.parse("foo=bar&baz=qux&baz=quux&corge");
console.log(params);
/**
{
  foo: 'bar',
  baz: [ 'qux', 'quux' ], 
  corge: ''
}
 */

const str = querystring.stringify({
  foo: "bar",
  baz: ["qux", "quux"],
  corge: "",
});
console.log(str); // foo=bar&baz=qux&baz=quux&corge=
