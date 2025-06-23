const passwordInput = document.getElementById("password");
const lengthCheck = document.getElementById("length-check");
const uppercaseCheck = document.getElementById("uppercase-check");
const lowercaseCheck = document.getElementById("lowercase-check");
const numberCheck = document.getElementById("number-check");
const specialCheck = document.getElementById("special-check");

function setCheck(check, pass, message) {
  if (pass) {
    check.classList.remove("text-red-600");
    check.classList.add("text-green-600");
    check.innerHTML = `&#x2713; ${message}`;
  } else {
    check.classList.remove("text-green-600");
    check.classList.add("text-red-600");
    check.innerHTML = `&#x2717; ${message}`;
  }
}

passwordInput.addEventListener("input", (event) => {
  const password = event.target.value;

  setCheck(lengthCheck, password.length >= 8, "At least 8 characters");
  setCheck(
    uppercaseCheck,
    /[A-Z]/.test(password),
    "Contains an uppercase letter"
  );
  setCheck(
    lowercaseCheck,
    /[a-z]/.test(password),
    "Contains a lowercase letter"
  );
  setCheck(numberCheck, /[0-9]/.test(password), "Contains a number");
  setCheck(
    specialCheck,
    /[!@#$%^&*]/.test(password),
    "Contains a special character (!@#$%^&*)"
  );
});
