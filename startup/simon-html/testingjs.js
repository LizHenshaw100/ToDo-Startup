document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value;

        // Simple validation
        if (!username || !password) {
            errorMsg.textContent = 'Please enter both username and password.';
            return;
        }

        // Simulate login (replace with real authentication)
            if (username === 'admin' && password === 'password123') {
                errorMsg.textContent = '';
                window.location.href = 'list.html'; // Redirect on success
            } else {
                errorMsg.textContent = 'Invalid username or password.';
            }
    });
});