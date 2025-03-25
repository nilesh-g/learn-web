function validateForm() {
  let errorMessage = "";
  const inputs = document.querySelectorAll("form input, form textarea");
  for (let i = 0; i < inputs.length; i++) {
    const elem = inputs[i];
    if (elem.value.length == 0) errorMessage += elem.id + " cannot be blank.\n";
  }
  errorMessage = errorMessage.trim();
  if (errorMessage.length != 0) window.alert(errorMessage);
  return errorMessage.length == 0;
}
