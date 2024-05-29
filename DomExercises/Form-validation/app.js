const myForm = document.getElementById("myForm");
const lableInput = document.querySelectorAll(".lable-input");
const messages = document.querySelectorAll(".msg");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

const verifyUsername = (username) => {
  if (username.value.length < 5 || username.length > 10) {
    messages[0].innerText = "More than 5 characters and less than 10 !";
    username.parentElement.classList.add("error");
  } else if (username.value !== username.value.toLowerCase()) {
    messages[0].innerText += " Only lowercase ! ";
    username.parentElement.classList.add("error");
  } else {
    username.parentElement.classList.add("success");
  }
};

const verifyEmail = (email) => {
  if (!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    messages[1].innerText = "Email not valid !";
    email.parentElement.classList.add("error");
  } else {
    email.parentElement.classList.add("success");
  }
};

const verifyPassword = (password) => {
  if (password.value.length < 8 || password.value.length > 15) {
    messages[2].innerText = "Between 8 and 15 characters !";
    password.parentElement.classList.add("error");
  } else {
    password.parentElement.classList.add("success");
  }
};

const verifyPasswordConfirmation = (password, confirmation) => {
  if (password.parentElement.classList.contains("error")) {
    //pass
  } else if (password.value !== confirmation.value) {
    messages[3].innerText = "Not the same password !";
    passwordConfirmation.parentElement.classList.add("error");
  } else {
    passwordConfirmation.parentElement.classList.add("success");
  }
};

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clean
  messages.forEach((e) => {
    e.innerText = "";
  });

  lableInput.forEach((e) => {
    e.classList.remove("error");
    e.classList.remove("success");
  });

  // Verify
  verifyUsername(username);
  verifyEmail(email);
  verifyPassword(password);
  verifyPasswordConfirmation(password, passwordConfirmation);

  let ok = Array.from(lableInput).every((e) => e.classList.contains("success"));

  if (ok) {
    console.log(`${username.value} ${email.value} ${password.value}`);
  }
});
