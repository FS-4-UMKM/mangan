// Tambahkan kode JavaScript kalian di file ini
// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  const formData = {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };

  return formData;
}

function isNumber(inputString) {
  return !isNaN(inputString);
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
}

function isObjectEmpty(obj) {
  for (const key in obj) {
    if (obj[key] === "") {
      return true;
    }
  }
  return false;
}

function validateFormData(formData) {
  if (
    !isObjectEmpty(formData) &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()
  ) {
    return true;
  }
  return false;
}

function submit() {
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);
  const warning = document.getElementById("warning");
  if (!isValid) {
    warning.style.visibility = "visible";
    warning.innerText = "Periksa form anda sekali lagi";
  } else {
    warning.style.visibility = "hidden";
    warning.innerText = "Warning";
  }
}

document
  .getElementById("submit-form")
  .addEventListener("click", function (event) {
    event.preventDefault();
    submit();
  });
