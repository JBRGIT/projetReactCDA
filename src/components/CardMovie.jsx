import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router";
import { toggleFavoriteReducer } from "../redux/favoritesSlice";

function CardMovie({ movie, className = "" }) {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(
    (favoritesMovie) => favoritesMovie.id === movie.id
  );

  const [img, setImg] = useState(
    `https://image.tmdb.org/t/p/w200${movie.poster_path}`
  );

  return (
    <div className={`${className} relative group mx-auto`}>
      <Link to={`/detail/${movie.id}`}>
        <div className="relative w-full h-full overflow-hidden rounded-lg ">
          <img
            src={img}
            alt="img"
            className=" w-full h-full object-cover opacity-75 "
            onError={() => setImg("https://placehold.co/200@2x.png")}
          />
          <div
            className="ease-in absolute inset-0  px-2 py-1 md:px-4 md:py-3 rounded-lg opacity-0 group-hover:bg-black group-hover:border-5 group-hover:border-transparent 
        group-hover:opacity-70 duration-300 
      "
          >
            <h2 className="text-white font-bold text-xs md:text-base">
              {movie.title.length > 15
                ? `${movie.title.slice(0, 15)}...`
                : movie.title}
            </h2>
            <p className="text-white font-bold my-1  text-xs md:text-sm">
              {movie.release_date}
            </p>
            <p className="text-white opacity-100 text-[8px]  sm:text-[10px]">
              {movie.overview.length > 100
                ? `${movie.overview.slice(0, 100)}...`
                : movie.overview}
            </p>
            {Math.ceil(movie.vote_average * 10) === 0 ? null : (
              <div className=" inline-flex items-center gap-1 absolute text-white font-bold bottom-1 text-xs ">
                <StarIcon className="text-amber-300 h-3" />
                {Math.ceil(movie.vote_average * 10)}%
              </div>
            )}
          </div>
        </div>
      </Link>

      <button
        className=" absolute cursor-pointer bottom-2  right-2 "
        onClick={() => dispatch(toggleFavoriteReducer(movie))}
      >
        <HeartIcon
          className={`h-4 w-4 ${isFavorite ? "text-red-600" : "text-white"}`}
        />
      </button>
    </div>
  );
}

export default CardMovie;
