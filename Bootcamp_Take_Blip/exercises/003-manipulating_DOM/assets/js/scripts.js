document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const btnToggleTheme = document.querySelector(".btn-toggle-theme");
  const themeSpan = document.querySelector("#theme");
  let isDarkMode = false;

  btnToggleTheme.addEventListener("click", () => {
    main.classList.toggle("dark-mode");

    isDarkMode = !isDarkMode;
    themeSpan.textContent = isDarkMode ? "Dark Mode ON" : "Dark Mode OFF";
    btnToggleTheme.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });
});
