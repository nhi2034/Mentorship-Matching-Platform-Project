document.addEventListener('DOMContentLoaded', function () {
  const logoutButton = document.querySelector('.sidebar-link-logout');

  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
      const confirmLogout = confirm('Are you sure you want to log out?');
      if (confirmLogout) {
        
        localStorage.removeItem('currentUser');

        window.location.replace('../login.html');
      }
    });
  }
});