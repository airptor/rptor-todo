// Simulated user data (replace with server-side storage)
const users = [
    { username: 'test', password: 'test', data: 'test data' },
    { username: 'user2', password: 'pass2', data: 'User 2 data' },
    // Add more users as needed
];

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        window.location.href = 'todo.html';
    } else {
        window.location.href = 'alert.html';
    }
}