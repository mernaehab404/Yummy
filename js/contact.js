const userName = document.getElementById("contact-name");
const userEmail = document.getElementById("contact-email");
const userPass = document.getElementById("userPass");
const userPhone = document.getElementById("contact-phone");
const reuserPass = document.getElementById("reuserPass");
const userAge = document.getElementById("contact-age");


function emailValidation() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(userEmail.value)) {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    return false;
  }
}

function PhoneValidation() {
  const phoneRegex = /^01[125]\d{8}$/;

  if (phoneRegex.test(userPhone.value)) {
    userPhone.classList.remove("is-invalid");
    userPhone.classList.add("is-valid");
    return true;
  } else {
    userPhone.classList.add("is-invalid");
    userPhone.classList.remove("is-valid");
    return false;
  }
}

function passValidation() {
  var passRegex = /^[0-9]\w{7,14}$/;
  if (passRegex.test(userPass.value)) {
    userPass.classList.remove("is-invalid");
    userPass.classList.add("is-valid");
    return true;
  } else {
    userPass.classList.add("is-invalid");
    userPass.classList.remove("is-valid");
    return false;
  }
}
function rePassValidation() {
  
  if (reuserPass.value == userPass.value) {
    reuserPass.classList.remove("is-invalid");
    reuserPass.classList.add("is-valid");
    return true;
  } else {
    reuserPass.classList.add("is-invalid");
    reuserPass.classList.remove("is-valid");
    return false;
  }
}

function nameValidation() {
  if (userName.value.length > 3) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    return false;
  }
}
function ageValidation() {
  if (userAge.value > 20 && userAge.value < 80) {
    userAge.classList.remove("is-invalid");
    userAge.classList.add("is-valid");
    return true;
  } else {
    userAge.classList.add("is-invalid");
    userAge.classList.remove("is-valid");
    return false;
  }
}

  $("#contact-name").on("input", function () {
    nameValidation()
  });
  $("#contact-email").on("input", function () {
    emailValidation()
  });
  $("#userPass").on("input", function () {
    passValidation()
  });
  $("#reuserPass").on("input", function () {
    rePassValidation()
  });
  $("#userPhone").on("input", function () {
    PhoneValidation()
  });
  $("#contact-age").on("input", function () {
    ageValidation()
  });
