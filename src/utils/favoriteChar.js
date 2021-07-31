export const favoriteChar = ({ clickedChar }) => {
  const favorites = [];

  favorites.push(clickedChar);
  localStorage.setItem(clickedChar);
};
