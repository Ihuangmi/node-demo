const util = require("util");

/**
 * callbackify: 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数
 */

// async function fn() {
//   return "hello world";
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret);
// });

function fn() {
  return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
  err && err.hasOwnProperty("reason") && err.reason === null; // true
  console.log(err);
  //    Error [ERR_FALSY_VALUE_REJECTION]: Promise was rejected with falsy value
  //     at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  //   reason: null,
  //   code: 'ERR_FALSY_VALUE_REJECTION'
  // }
});
