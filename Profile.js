document.getElementById('signOutButton').addEventListener('click', function() {
    // Clear user authentication data (for example, remove tokens from localStorage)
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');

    // Optionally, you might want to clear other user-specific data
    localStorage.removeItem('userData');
    sessionStorage.removeItem('userData');

    // Redirect the user to the sign-in page or home page
    window.location.href = 'Index.html'; 
});
