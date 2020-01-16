async function getInformation(url) {
  let obj = {};
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      obj = data;
    });
  console.log(obj); // {userId: 1, id: 1, title: "delectus aut autem", completed: false}
}
let apiURL = "https://jsonplaceholder.typicode.com/todos/1";

getInformation(apiURL);
