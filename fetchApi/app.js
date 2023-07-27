const API = "https://restcountries.com/v3.1/all";

fetch(API).then((data) => {
  return data
    .json()
    .then((dataJSon) => {
      console.log(dataJSon);
    })
    .catch((Error) => {
      console.log(Error);
    });
});
