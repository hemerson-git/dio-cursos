const email = document.querySelector("#email") as HTMLInputElement;
const password = document.querySelector("#password") as HTMLInputElement;
const submitBtn = document.querySelector("#submit-button") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passValue = password.value.trim();

  if (emailValue && passValue) {
    form.submit();
  }
});
