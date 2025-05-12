document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in both fields.");
    console.log("Login failed: Missing username or password.");
  } else {
    console.log("Login submitted for user:", username);
    alert("Login successful!");
  }
});
