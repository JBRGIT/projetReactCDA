import { useSelector } from "react-redux";
import CardMovie from "../components/CardMovie";

function FavoriteView() {
  const favorites = useSelector((state) => state.favorite.favorites);

  return (
    <div className="min-h-screen">
      <div className=" p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-6 justify-items-center">
        {favorites.map((movie) => (
          <CardMovie
            key={movie.id}
            movie={movie}
            className="w-[120px] h-[180px] sm:w-[140px] sm:h-[210px] md:w-[140px] md:h-[210px] lg:w-[160px] lg:h-[240px]"
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteView;
