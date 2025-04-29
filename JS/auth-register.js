document.querySelector('.signup__signInButton').addEventListener('click', function () {
    const name = document.querySelector('.input-signup-username').value.trim();
    const email = document.querySelector('.input-signup-email').value.trim(); // SỬA Ở ĐÂY
    const password = document.querySelector('.input-signup-password').value.trim();
    const checkboxes = document.querySelectorAll('.checkbox input');

    let role = null;
    if (checkboxes[0].checked && !checkboxes[1].checked) role = 'mentee';
    else if (!checkboxes[0].checked && checkboxes[1].checked) role = 'mentor';
    else {
        alert('Please select the correct account type: Mentor or Mentee.');
        return;
    }

    if (!name || !email || !password) {
        alert('Please fill in all required information!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const isEmailExists = users.some(user => user.email === email);
    if (isEmailExists) {
        alert('Email already exists!');
        return;
    }

    users.push({ name, email, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    window.location.href = 'login.html'; 
});