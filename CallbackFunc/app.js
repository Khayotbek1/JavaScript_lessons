const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("Error bervordiyu", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

console.log(1);
console.log(2);
//callback func  Async function bo'ldi
getTodos((err, data) => {
  err ? console.log(err) : console.log(data);
});

console.log(3);
console.log(4);
