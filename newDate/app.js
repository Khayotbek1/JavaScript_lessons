const now = new Date();
const today = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

console.log("Today:", today);
console.log("Month:", month);
console.log("Year", year);

// time
const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
const minute =
  now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
const second =
  now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

console.log(`${hour}:${minute}:${second}`);
