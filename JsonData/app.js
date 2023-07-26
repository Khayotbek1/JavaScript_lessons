const getTodos = (callback) => {
  const requset = new XMLHttpRequest();
  requset.addEventListener("readystatechange", () => {
    if (requset.readyState === 4 && requset.status === 200) {
      const data = JSON.parse(requset.responseText);
      callback(undefined, data);
    } else if (requset.readyState === 4) {
      callback("Error bervordiyu", undefined);
    }
  });
  requset.open("GET", "./todos.json");
  requset.send();
};

getTodos((err, data) => {
  err ? console.log(err) : console.log(data);
});
