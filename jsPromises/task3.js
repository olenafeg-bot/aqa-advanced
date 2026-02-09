async function ToDo() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    console.log('Get response:', todo);
    return todo;
    } catch(error) {
    console.error('Error:', error);
};
}
ToDo().then(todo => {
    console.log('Data from ToDo function:', todo);
});

async function getUser() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log('Get response:', user);
    return user;
    } catch(error) {
    console.error('Error:', error);
};  
};
getUser().then(user => console.log('User data:', user));
const Promise1 = Promise.resolve(getUser());
const Promise2 = Promise.resolve(getUser());
const Promise3 = Promise.resolve(getUser());
const allUsers = Promise.all([Promise1, Promise2, Promise3]);
allUsers.then(users => console.log('All users:', users));   

const getDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
getDelay(2000).then(() => console.log('Delayed message after 2 seconds'));
const promiseA = Promise.resolve(getUser());
const promiseB = Promise.resolve(getUser());
const promiseC = Promise.resolve(getUser());
const newPromise = Promise.race([promiseA, promiseB, promiseC]);
newPromise.then(users => console.log('New promise users:', users));
