export function toggleDarkMode() {
  const darkModeToggleCheckbox = document.querySelector(
    ".dark-toggle-checkbox"
  );
  let storagedDarkMode = localStorage.getItem("Dark Mode");

  if (storagedDarkMode === "enabled") enableDarkMode();

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("Dark Mode", "enabled");
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("Dark Mode", null);
  }

  darkModeToggleCheckbox.addEventListener("change", () => {
    storagedDarkMode = localStorage.getItem("Dark Mode");
    if (storagedDarkMode !== "enabled") enableDarkMode();
    else disableDarkMode();
  });
}
