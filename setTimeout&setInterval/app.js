//setTimout
function callMe() {
  alert("Hello world");
}

setTimeout(callMe, 3000);

// setInterval
let a = 0;
const timer = setInterval(() => {
  a++;
  console.log(a);
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 10000);
