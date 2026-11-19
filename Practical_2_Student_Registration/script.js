document.getElementById('regForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset previous errors and success message
    const errorElements = document.querySelectorAll('.error-text');
    errorElements.forEach(el => el.textContent = '');
    const successMsg = document.getElementById('successMsg');
    successMsg.style.display = 'none';

    let isValid = true;

    // 1. Username validation
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
        isValid = false;
    }

    // 2. Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // 3. Password validation
    const password = document.getElementById('password').value;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    } else if (!hasLetter || !hasNumber) {
        document.getElementById('passwordError').textContent = 'Password must contain both letters and numbers.';
        isValid = false;
    }

    // 4. Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // 5. Age validation
    const ageVal = document.getElementById('age').value.trim();
    const age = parseInt(ageVal, 10);
    if (ageVal === '') {
        document.getElementById('ageError').textContent = 'Age is required.';
        isValid = false;
    } else if (isNaN(age) || age < 16 || age > 60) {
        document.getElementById('ageError').textContent = 'Age must be between 16 and 60.';
        isValid = false;
    }

    // 6. Mobile number validation
    const mobile = document.getElementById('mobile').value.trim();
    const mobilePattern = /^[0-9]{10}$/;
    if (mobile === '') {
        document.getElementById('mobileError').textContent = 'Mobile number is required.';
        isValid = false;
    } else if (!mobilePattern.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number must be exactly 10 digits.';
        isValid = false;
    }

    // 7. Gender validation
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById('genderError').textContent = 'Please select a gender.';
        isValid = false;
    }

    // 8. Course validation
    const course = document.getElementById('course').value;
    if (course === '') {
        document.getElementById('courseError').textContent = 'Please select a course.';
        isValid = false;
    }

    // If all inputs are valid, display success message
    if (isValid) {
        successMsg.textContent = `Registration Successful! Welcome, ${username}.`;
        successMsg.style.display = 'block';
        document.getElementById('regForm').reset();
    }
});
