// Less syntax, doesn't bind this.

function normal(value) {
    return value;
}

arrow = value => {
    return value;
};

console.log(normal(5))  // 5
console.log(arrow(4))   // 4


let user = {
    firstName: "ed",
    lastName: "woulfe",
    getName() {
        return this.firstName + " " + this.lastName;
    }
}

// Syntax Error ( not binding this)
let user1 = {
    firstName: "ed",
    lastName: "woulfe",
    getName = () => {
        return this.firstName + " " + this.lastName;
    }
}

console.log(user.getName())

