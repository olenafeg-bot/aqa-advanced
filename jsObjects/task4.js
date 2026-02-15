const person ={
    firstName: "Serhii",
    lastName: "Serdiuk",
    age: 35,
    
};
person.email = "serhii.serdiuk@gmail.com";
delete person.age;
console.log(person);