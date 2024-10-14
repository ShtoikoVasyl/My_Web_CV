function toggleText(element) {
  const post = element.closest(".post");
  const fullTextContainer = post.querySelector(".full-text-container");

  const isOpen = fullTextContainer.classList.contains("open");

  if (!isOpen) {
    fullTextContainer.classList.add("open");
    element.textContent = "Collapse";
  } else {
    fullTextContainer.classList.remove("open"); // Закрити текст
    element.textContent = "Read more"; // Повернути текст посилання
  }
}
