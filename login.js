let isLogin = true;

    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");

    function toggleForm() {
      isLogin = !isLogin;

      if (!isLogin) {
        formTitle.innerText = "Sign Up";
        authForm.innerHTML = `
          <input type="text" id="new-username" placeholder="Username" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="new-password" placeholder="Password" required />
          <input type="password" id="confirm-password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
          <p class="toggle">Already have an account? <span onclick="toggleForm()">Login</span></p>
        `;

        authForm.onsubmit = handleSignup;
      } else {
        location.reload();
      }
    }

    // LOGIN Handler
    document.getElementById("auth-form").onsubmit = function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const savedUser = JSON.parse(localStorage.getItem(username));
      if (savedUser && savedUser.password === password) {
        alert("Login successful!");
        window.location.href = "index.html"; // redirect to your homepage
      } else {
        alert("Invalid username or password.");
      }
    };

    // SIGNUP Handler
    function handleSignup(e) {
      e.preventDefault();
      const username = document.getElementById("new-username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("new-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const userData = {
        email: email,
        password: password,
      };

      localStorage.setItem(username, JSON.stringify(userData));
      alert("Signup successful! Now you can log in.");
      location.reload();
    }