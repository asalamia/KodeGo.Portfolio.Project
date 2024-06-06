document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log(loginForm);
    console.log(event);

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email);
    console.log(password);

    // Prepare the data to be sent in the request
    const loginData = {
        email: email,
        password: password
    };
    console.log(loginData);
    try {
        const response = await fetch('http://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)          
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data);

        // Handle successful login (e.g., redirect to another page, save token, etc.)
        // For example, save the token to local storage
        localStorage.setItem('authToken', data.token);

        // Redirect to another page
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed, please try again');
    }
});
