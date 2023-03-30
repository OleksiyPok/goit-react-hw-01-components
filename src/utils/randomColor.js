export function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * (200 - 50) + 50)} ${Math.floor(
    Math.random() * (200 - 50) + 50
  )} ${Math.floor(Math.random() * (200 - 50) + 50)})`;
}
