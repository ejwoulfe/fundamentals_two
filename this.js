// References the current context
let user = {
  name: "ed",
  getName() {
    return this.name;
  }
};

user.getName(); // "ed"

let user2 = {
  name: "jim",
  getName: () => {
    return this.name;
  }
};

user2.getName(); // "" or undefined

//this inside a global scope will be the window object
// Window { parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, … }
