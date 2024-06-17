document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Prepare the data to be sent in the request
    const loginData = {
        email: email,
        password: password
    };

    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)          
        });

        if (!response.ok) {
            console.error('Response status:', response.status);
            console.error('Response status text:', response.statusText);
            throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        console.log('Conratulations')
        alert('Congratulations Login successful',data);

        // Handle successful login (e.g., redirect to another page, save token, etc.)
        // For example, save the token to local storage
        localStorage.setItem('authToken', data.token);
        console.log(data);

        // Redirect to another page
        //window.location.href = 'login.html';
    } catch (error) {
        console.error('Fetch error:', error.message);
        console.error('Error details:', error);
        alert('Login failed, please try again');
    }
});
