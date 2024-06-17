
 const homeBtn = document.getElementById("back-home");
  function clickHome(){
    window.location.href = "Index.html"
  }

  const loginBtn = document.getElementById("login");
  function clickLogin(){
    window.location.href = "login.html"
  }

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
  });
  
  function validateForm() {
    let isValid = true;
  
    // Reset previous error messages
    resetErrors();
  
    // Validate Contact Information
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
  
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
  
    if (fullName.value.trim() === '') {
      fullNameError.textContent = 'Full Name is required';
      isValid = false;
    }
  
    if (email.value.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    }
  
    if (phone.value.trim() === '') {
      phoneError.textContent = 'Phone Number is required';
      isValid = false;
    }
  
    // Validate Employment Information
    const companyName = document.getElementById('companyName');
    const jobTitle = document.getElementById('jobTitle');
    const income = document.getElementById('income');
  
    const companyNameError = document.getElementById('companyNameError');
    const jobTitleError = document.getElementById('jobTitleError');
    const incomeError = document.getElementById('incomeError');
  
    if (companyName.value.trim() === '') {
      companyNameError.textContent = 'Company Name is required';
      isValid = false;
    }
  
    if (jobTitle.value.trim() === '') {
      jobTitleError.textContent = 'Job Title is required';
      isValid = false;
    }
  
    if (income.value.trim() === '') {
      incomeError.textContent = 'Annual Income is required';
      isValid = false;
    }
  
    // Validate Bank References
    const bankName = document.getElementById('bankName');
    const branch = document.getElementById('branch');
    const accountNumber = document.getElementById('accountNumber');
  
    const bankNameError = document.getElementById('bankNameError');
    const branchError = document.getElementById('branchError');
    const accountNumberError = document.getElementById('accountNumberError');
  
    if (bankName.value.trim() === '') {
      bankNameError.textContent = 'Bank Name is required';
      isValid = false;
    }
  
    if (branch.value.trim() === '') {
      branchError.textContent = 'Branch is required';
      isValid = false;
    }
  
    if (accountNumber.value.trim() === '') {
      accountNumberError.textContent = 'Account Number is required';
      isValid = false;
    }
  
    // Validate ID Pictures Upload
    const bankQR = document.getElementById('bankQR');
    const idFront = document.getElementById('idFront');
    const idBack = document.getElementById('idBack');
  
    const idFrontError = document.getElementById('idFrontError');
    const idBackError = document.getElementById('idBackError');
  
    if (idFront.files.length === 0) {
      idFrontError.textContent = 'ID Front picture is required';
      isValid = false;
    }
  
    if (idBack.files.length === 0) {
      idBackError.textContent = 'ID Back picture is required';
      isValid = false;
    }
  
    // If form is valid, submit it
    if (isValid) {
      alert('Form submitted successfully!');
      document.getElementById('registrationForm').reset(); // Reset form fields
      resetErrors(); // Clear any remaining error messages after submission
    }
  }
  
  function isValidEmail(email) {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function resetErrors() {
    // Reset all error messages
    const errorMessages = document.getElementsByClassName('error-message');
    Array.from(errorMessages).forEach(function(element) {
      element.textContent = '';
    });
  }
  