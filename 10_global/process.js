/**
 * process 是一个全局变量，即 global 对象的属性。
 * 描述当前Node.js 进程状态的对象
 *
 * 菜鸟教程： https://www.runoob.com/nodejs/nodejs-global-object.html
 */

// exit-当进程准备退出时触发
// process.on("exit", function (code) {
//   // 以下代码永远不会执行
//   setTimeout(function () {
//     console.log("该代码不会执行");
//   }, 0);

//   console.log("退出码为:", code);
// });
// console.log("程序执行结束");

// 输出：
// 程序执行结束;
// 退出码为: 0;

// // 输出到终端
// process.stdout.write("Hello World!" + "\n");

// // 通过参数读取
// process.argv.forEach(function (val, index, array) {
//   console.log(index + ": " + val);
// });

// // 获取执行路径
// console.log("获取执行路径:", process.execPath);

// // 平台信息
// console.log("平台信息:", process.platform);

// 输出：
// Hello World!
// 0: C:\Program Files\nodejs\node.exe
// 1: D:\code\demos\node-test\10_global\process.js
// 获取执行路径: C:\Program Files\nodejs\node.exe
// 平台信息: win32

// 输出当前目录
console.log("当前目录: " + process.cwd());

// 输出当前版本
console.log("当前版本: " + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

// 输出：
// 当前目录: D:\code\demos\node-test\10_global
// 当前版本: v16.15.1
// {
//   rss: 29392896,
//   heapTotal: 4931584,
//   heapUsed: 4131840,
//   external: 331198,
//   arrayBuffers: 11158
// }
