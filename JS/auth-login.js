document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".log-in");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const name = document.querySelector("input[placeholder='Name']").value.trim();
      const email = document.querySelector("input[placeholder='Email']").value.trim();
      const password = document.querySelector("input[placeholder='Password']").value.trim();

      if (!name || !email || !password) {
        alert("Please fill in your login information.");
        return;
      }

      const role = this.classList.contains("login__registerButton") ? "mentee" : "mentor";

      mockLoginAPI({ name, email, password, role })
        .then(res => {
          saveCurrentUser(res.user);

          const redirectURL = role === "mentee" ? "Mentee/match-mentor.html" : "Mentor/match-mentee.html";
          window.location.href = redirectURL;
        })
        .catch(err => {
          alert(err.message);
        });
    });
  });
});