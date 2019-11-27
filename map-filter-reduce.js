let arr1 = [1, 2, 3, 4, 5, 10, 20, 30];

let arr2 = arr1.map(value => {
  return value;
});

// arr2 = [1,2,3,4,5,10,20,30]

let arr3 = arr1.filter(value => value > 5);

// arr3 = [10,20,30]

let total = arr1.reduce((acc, value) => {
  return (acc += value);
}, 0);

// total = 75
