// Callback functions -  A callback is a function that is to be executed after another function has finished executing

let arr1 = [1, 2, 3];

// map function takes in a callback function

let arr2 = arr1.map((value, index) => {
  if (index <= 1) {
    return value + 2;
  } else {
    return 0;
  }
});

console.log(arr2); // [3,4,0]
