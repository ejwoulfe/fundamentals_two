class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let me = new Person("Ed Woulfe", 26);

console.log(typeof me) // object
console.log(typeof "hi") // string