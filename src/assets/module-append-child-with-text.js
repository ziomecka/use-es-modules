export function appendChildWithText(
  textContent,
  elementTagName = 'p',
  containerTagName = 'body',
) {
  const container = document.querySelector(containerTagName);

  if (!container) {
    return;
  }

  const element = document.createElement(elementTagName);
  element.textContent = textContent;

  return container.appendChild(element);
}
