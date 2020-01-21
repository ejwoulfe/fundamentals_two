let arr1 = [1, 2, 3];

function print(...values) {
  console.log(...values);
}

print(arr1); // [1, 2, 3]

const [month, day, year] = [9, 23, 1965];
console.log(month); // 9
console.log(year); // 1965

let user = ({ firstName: fn, lastName: ln } = {
  firstName: "Ed",
  lastName: "Woulfe"
});

console.log(fn); // Ed
console.log(ln); // Woulfe
