const users = [
    {name: "Olena", email: "olena@gmail.com", age: 28},
    {name: "Viktoriia", email: "viktoriia@gmail.com", age: 30},
    {name: "Serhii", email: "serhii@gmail.com", age: 35}
]

for (const user of users) {
    console.log(`${user.name} has email: ${user.email} and is ${user.age} years old`);
}
for (const {name, email, age} of users) {
    console.log(`${name} has email: ${email} and is ${age} years old`);
}