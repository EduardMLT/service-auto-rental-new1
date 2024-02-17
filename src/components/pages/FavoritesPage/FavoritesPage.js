
const FavoritesPage = () => {
  
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];  
  
  console.log('FavoritesPage', { storedFavorites });
  return (
    <div>
      <h2>Favorite Items</h2>
      <ul>
        {storedFavorites.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
