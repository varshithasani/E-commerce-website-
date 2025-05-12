document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const hobbies = document.getElementById("hobbies").value;
  const state = document.getElementById("state").value;

  if (!fullname || !email || !password || !address || !phone || !dob || !gender || !hobbies || !state) {
    alert("Please fill in all the fields.");
    return;
  }

  console.log("Form Submitted Successfully:");
  console.log({ fullname, email, password, address, phone, dob, gender, hobbies, state });

  alert("Registration Successful!");
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  console.clear();
  console.log("Form reset.");
});