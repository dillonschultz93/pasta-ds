const allToolClipButtons = [...document.querySelectorAll('span[data-toolclip]')];

if (allToolClipButtons.length > 0) {
  // Set up all toolclip buttons
  allToolClipButtons.forEach(button => {
    const data = button.dataset.toolclip;
    button.addEventListener('click', () => handleCopyToClipboard(data));
  });
}