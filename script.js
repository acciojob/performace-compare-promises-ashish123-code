// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
const startTimeAll = Date.now();
Promise.all(apiUrls.map(url => fetch(url)))
  .then(responses => {
    const endTimeAll = Date.now();
    const timeTakenAll = endTimeAll - startTimeAll;
    document.getElementById("output-all").innerHTML = timeTakenAll;
    console.log(responses);
  })
  .catch(error => console.log(error));

const startTimeAny = Date.now();
Promise.any(apiUrls.map(url => fetch(url)))
  .then(response => {
    const endTimeAny = Date.now();
    const timeTakenAny = endTimeAny - startTimeAny;
    document.getElementById("output-any").innerHTML = timeTakenAny;
    console.log(response);
  })
  .catch(error => console.log(error));
// You can write your code here
