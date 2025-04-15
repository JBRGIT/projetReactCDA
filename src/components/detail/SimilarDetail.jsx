import { useState } from "react";
import apiMovie from "./../../api/apiMovie";
import { useEffect } from "react";
import CardMovie from "../CardMovie";

function SimilarDetail({ id }) {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    apiMovie.get(`/movie/${id}/similar?language=fr-FR`).then((res) => {
      setSimilarMovies(res.data.results);
    });
  }, [id]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);
  if (similarMovies.length > 0)
    return (
      <div className=" w-[80%] mx-auto  ">
        <div className="text-green-400 font-bold text-lg  md:text-3xl  my-3 ">
          Recommended Movies
        </div>
        <div className=" flex scrollbar-thin scrollbar-track-blue-950 scrollbar-thumb-green-500 overflow-x-auto gap-4 pb-4 scroll-smooth overflow-hidden  ">
          {similarMovies.map((movie) => (
            <CardMovie
              key={movie.id}
              movie={movie}
              className="min-w-[120px] min-h-[180px] sm:min-w-[140px] sm:min-h-[210px] md:min-w-[140px] md:min-h-[210px] lg:min-w-[160px] lg:min-h-[240px]
"
            />
          ))}
        </div>
      </div>
    );
}

export default SimilarDetail;
