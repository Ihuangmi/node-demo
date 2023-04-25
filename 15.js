// node;

// console.log(process.env.PATH.split(":").join("\n"));

// 获取平台信息
console.log(process.arch); // x64
console.log(process.platform); // win32

// 获取内存使用情况
console.log(process.memoryUsage());
// {
//   rss: 25350144,
//   heapTotal: 4931584,
//   heapUsed: 4175368,
//   external: 426683,
//   arrayBuffers: 11158
// }

// 获取命令行参数
console.log(process.argv);
// ["C:\\Program Files\\nodejs\\node.exe", "D:\\code\\demos\\node-test\\15.js"];
