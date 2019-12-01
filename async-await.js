async function doSomething() {
  console.log(1);
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
  console.log(2);
}
doSomething();
// 1
// {
//     userId: 1,
//         id: 1,
//             title: "delectus aut autem",
//                 completed: false
// }
// 2
