const form = document.getElementById("formcontainer");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();

  if (usernameValue === "") {
    errorMsg(username, "* Username cannot be blank");
  } else if (usernameValue.length <= 3) {
    errorMsg(username, "* Username must be more than three characters");
  } else {
    successMsg(username);
  }

  if (emailValue === "") {
    errorMsg(email, "* email cannot be blank");
  } else if (!isEmail(emailValue)) {
    errorMsg(email, "* Not a valid email");
  } else {
    successMsg(email);
  }

  if (passwordValue === "") {
    errorMsg(password, "* password cannot be blank");
  } else if (passwordValue.length <= 5) {
    errorMsg(password, "* password must be more than five characters");
  } else {
    successMsg(password);
  }

  if (confirmpasswordValue === "") {
    errorMsg(confirmpassword, "* confirmpassword cannot be blank");
  } else if (confirmpasswordValue !== passwordValue) {
    errorMsg(confirmpassword, "* Passwords does not match");
  } else {
    successMsg(confirmpassword);
  }
}

function errorMsg(input, message) {
  const parentDiv = input.parentElement;
  const small = parentDiv.querySelector("small");
  //   parentDiv.className = "form error";
  parentDiv.classList.toggle("error");
  small.innerText = message;
}

function successMsg(input) {
  const parentDiv = input.parentElement;
  parentDiv.className = "form success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
