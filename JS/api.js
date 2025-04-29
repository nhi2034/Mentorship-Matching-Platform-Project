function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Mock API Đăng ký
function mockRegisterAPI({ name, email, password, role }) {
  return new Promise((resolve, reject) => {
    const users = getUsers();
    const exist = users.find(u => u.email === email);
    if (exist) {
      reject({ message: "Email already exists!" });
      return;
    }
    const newUser = { name, email, password, role };
    users.push(newUser);
    saveUsers(users);
    resolve({ message: "Registration successful!", user: newUser });
  });
}

function mockLoginAPI({ name, email, password, role }) {
  return new Promise((resolve, reject) => {
    const users = getUsers();
    const user = users.find(
      u => u.name === name && u.email === email && u.password === password
    );
    if (!user) {
      reject({ message: "Incorrect login information!" });
      return;
    }
    resolve({ message: "Registration successful!", user });
  });
}