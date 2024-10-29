console.log("1");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => console.log("promise setTimeout"));
}, 0);

Promise.resolve().then(() => console.log("promise 1"));

Promise.resolve().then(() => console.log("promise 2"));

console.log("4");
