document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("usernameInput");
  const generateLinkButton = document.getElementById("generateLinkButton");
  const telegramLink = document.getElementById("telegramLink");

  generateLinkButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username !== "") {
      const telegramURL = `https://t.me/${encodeURIComponent(username)}`;
      telegramLink.innerHTML = `<a href="${telegramURL}" target="_blank">${telegramURL}</a>`;
    } else {
      telegramLink.innerHTML = "Please enter a valid username.";
    }
  });
});
