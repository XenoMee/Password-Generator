export const copyPassword = () => {
  const copyButton = document.querySelector("#copy-button");

  copyButton.addEventListener("click", () => {
    const password = document.querySelector("#generated-password").textContent;

    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  });
};
