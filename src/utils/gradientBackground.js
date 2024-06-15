export const getRandomGradient = () => {
  const colors = [
    "#3498db",
    "#2ecc71",
    "#f1c40f",
    "#e74c3c",
    "#9b59b6",
    "#e84393",
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const color1 = getRandomColor();
  const color2 = getRandomColor();

  return `background: linear-gradient(to right, ${color1}, ${color2});`;
};
