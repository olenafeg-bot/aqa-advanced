class newToDo {
    getToDo() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(todo => {
            console.log('Get response:', todo);
            return todo;
            })
        .catch(error => {
            console.error('Error:', error);
        });
}
}
const toDoInstance = new newToDo();
toDoInstance.getToDo().then(todo => {
    console.log('Data from ToDo function:', todo);
});

class newUser {
    async getNewUser() {
        try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log('Get response:', user);
    return user;
    } catch(error) {
    console.error('Error:', error);
};  
};
    }
 const userInstance = new newUser();
 userInstance.getNewUser().then(user => console.log('User data:', user));
