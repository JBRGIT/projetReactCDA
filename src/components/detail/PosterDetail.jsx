import { HeartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteReducer } from "../../redux/favoritesSlice";
import { useEffect } from "react";

function PosterDetail({ movie }) {
  const favorites = useSelector((state) => state.favorite.favorites);

  const isFavorite = favorites.some(
    (favoritesMovie) => favoritesMovie.id === movie.id
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setImg(`https://image.tmdb.org/t/p/original${movie.poster_path}`);
  }, [movie.poster_path]);

  const [img, setImg] = useState(
    `https://image.tmdb.org/t/p/original${movie.poster_path}`
  );

  return (
    <div className="relative  ">
      <img
        src={img}
        alt="img"
        className="rounded-lg  object-cover lg:w-[70%] "
        onError={() => setImg("https://placehold.co/200@2x.png")}
      />

      <button
        className="absolute cursor-pointer top-3 left-3"
        onClick={() => dispatch(toggleFavoriteReducer(movie))}
      >
        <HeartIcon
          className={`h-6 w-6 md:h-8 md:w-8   ${
            isFavorite ? "text-red-600" : "text-white"
          }`}
        />
      </button>
    </div>
  );
}

export default PosterDetail;
