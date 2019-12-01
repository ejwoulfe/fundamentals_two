let arr1 = [1, 2, 2, 3, 4, 5, 5, 10, 20, 20];
let arr2 = [...new Set(arr1)];

console.log(arr2); // [1,2,3,4,5,10,20]

/////////////////////////////////////////////////////////////////

let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
  if (!arr3.includes(arr1[i])) {
    arr3.push(arr1[i]);
  }
}

console.log(arr3); // [1,2,3,4,5,10,20]

/////////////////////////////////////////////////////////////////
// Will always add the first instance of that number, when the second instance of the dup number comes up.
// the indexOf the dupped number will be that of the first occurence, meaning it is a duplicate and not to add it.
let arr4 = arr1.filter((value, index) => arr1.indexOf(value) === index);

console.log(arr4); // [1,2,3,4,5,10,20]
