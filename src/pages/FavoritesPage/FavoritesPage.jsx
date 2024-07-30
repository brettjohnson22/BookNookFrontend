import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./FavoritesPage.css";
import noimg from "../../resources/no-image.png"

const FavoritesPage = () => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    let response = await axios.get(`https://localhost:5001/api/Favorites`, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    setFavorites(response.data);
    console.log(response.data)
  };

  useEffect(() => {
    getFavorites();
  }, [])

  return (
    <div>
      {favorites &&
        favorites.map((favorite) => (
          <>
            {favorite.thumbnailUrl ? (
              <img src={favorite.thumbnailUrl} alt={favorite.title} />
            ) : (
              <img src={noimg} alt="Missing"/>
            )}
            <Link to={`/book/${favorite.BookId}`}>
              <p>{favorite.title}</p>
            </Link>
          </>
        ))}
    </div>
  );
};

export default FavoritesPage;
